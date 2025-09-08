"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import HelpCenterBox from "@/components/HelpCenterBox";

const allFaqs = [
  {
    question: "What is Funbeano?",
    answer:
      "Funbeano is a platform to discover and book the best playhouses and activity centers for your children. We offer a curated selection of safe, fun, and engaging spaces.",
  },
  {
    question: "How do I book a playhouse?",
    answer:
      "Booking is easy! Simply browse our listings, select a playhouse you like, choose a date and time, and follow the on-screen instructions to complete your booking.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes, you can cancel a booking. Please refer to our cancellation policy on the booking page for details about deadlines and potential refunds.",
  },
  {
    question: "Are the playhouses safe?",
    answer:
      "Absolutely! We partner with playhouses that meet our high standards for safety and cleanliness. Each listing provides detailed information about their safety measures.",
  },
  {
    question: "How can I list my playzone on Funbeano?",
    answer:
      "We'd love to have you! Please navigate to the 'List your Playzone' section of our website and fill out the application form. Our team will get in touch with you.",
  },
];

const popularSuggestions = [
  "What are the safety standards?",
  "How do I cancel a booking?",
  "Can I book for a birthday party?",
  "What is the age range for playhouses?",
  "How do I contact support?",
];

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(popularSuggestions);

  useEffect(() => {
    if (searchTerm) {
      const filtered = popularSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(popularSuggestions);
    }
  }, [searchTerm]);

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: "Sunny Spells";
          src: url("/fonts/Sunny_Spells.ttf") format("truetype");
        }
        .font-sunny {
          font-family: "Sunny Spells", sans-serif;
        }
        @keyframes float-a {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        @keyframes float-b {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-10deg);
          }
        }
        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
        .float-a {
          animation: float-a 5s ease-in-out infinite;
        }
        .float-b {
          animation: float-b 4s ease-in-out infinite;
        }
        .accordion-content[data-state="open"] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .accordion-content[data-state="closed"] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>

      <div className="bg-blue-50">
        {/* Search Section */}
        <section className="min-h-screen flex flex-col gap-8 items-center justify-center relative overflow-hidden bg-amber-50">
          <div className="absolute top-10 left-10 w-24 h-24 float-a">
            <Image src="/donut.png" alt="Donut" width={96} height={96} />
          </div>
          <div className="absolute bottom-10 right-10 w-20 h-20 float-b">
            <Image src="/toffee.png" alt="Toffee" width={80} height={80} />
          </div>
          <div className="container mx-auto px-4 text-center mt-20">
            <h1 className="font-sunny text-4xl md:text-7xl bg-gradient-to-b from-orange-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-3">
              How can we help?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to your questions, or get in touch with our team.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-20" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="w-full text-lg p-6 pl-12 rounded-full shadow-lg border-2 border-orange-200 focus:border-orange-400 relative z-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSuggestionBoxOpen(true)}
                onBlur={() =>
                  setTimeout(() => setIsSuggestionBoxOpen(false), 200)
                }
              />
              {/* <Button className="absolute -right-20 bottom-1/2 z-20 translate-y-1/2 rounded-full">
                Search
              </Button> */}
              {isSuggestionBoxOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg border p-4 text-left z-20">
                  {filteredSuggestions.length > 0 ? (
                    <>
                      <h4 className="font-bold text-gray-700 mb-2">
                        Suggestions
                      </h4>
                      {filteredSuggestions.map((suggestion, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block p-2 rounded-lg hover:bg-gray-100"
                        >
                          {suggestion}
                        </a>
                      ))}
                    </>
                  ) : (
                    <p className="p-2 text-gray-500">Nothing to show</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <HelpCenterBox />
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-sunny text-5xl text-center mb-12 text-blue-500">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {allFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-md border-b-4 border-orange-200 overflow-hidden last:border-b-4"
                  >
                    <AccordionTrigger className="text-lg font-bold text-gray-800 text-left p-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600 px-6 pb-6 accordion-content">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
