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
import { useDebounce } from "@/hooks/useDebounce";
import { Search, HelpCircle, Phone, Heart, Shield, Smile } from "lucide-react";

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

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(allFaqs);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = allFaqs.filter(
        (faq) =>
          faq.question
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(allFaqs);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: 'Sunny Spells';
          src: url('/fonts/Sunny_Spells.ttf') format('truetype');
        }
        .font-sunny {
          font-family: 'Sunny Spells', sans-serif;
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
        .float-a {
          animation: float-a 5s ease-in-out infinite;
        }
        .float-b {
          animation: float-b 4s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-blue-50">
        {/* Search Section */}
        <section className="py-20 relative overflow-hidden bg-amber-50">
          <div className="absolute top-10 left-10 w-24 h-24 float-a">
            <Image src="/donut.png" alt="Donut" width={96} height={96} />
          </div>
          <div className="absolute bottom-10 right-10 w-20 h-20 float-b">
            <Image src="/toffee.png" alt="Toffee" width={80} height={80} />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48">
            <Image
              src="/TestinomialFoxImage.png"
              alt="Fox"
              width={192}
              height={192}
            />
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-sunny text-6xl md:text-7xl text-orange-500 mb-3">
              How can we help?
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to your questions, or get in touch with our team.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="w-full text-lg p-6 pl-12 rounded-full shadow-lg border-2 border-orange-200 focus:border-orange-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-sunny text-5xl text-blue-500 mb-4">
                About Funbeano
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Funbeano was born from a simple idea: to make discovering and
                booking kids' play zones as joyful as playtime itself. We are a
                team of parents, tech enthusiasts, and fun-loving individuals
                dedicated to creating a safe, reliable, and exciting platform
                for families across the country.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-16">
              <div>
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-orange-100 mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <Image
                    src="/icons/doubleHeartFooter.svg"
                    alt="Mission"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To connect families with the best play experiences, creating
                  lasting memories one adventure at a time.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <Image
                    src="/trustFooterIcon.svg"
                    alt="Vision"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be India's most trusted platform for kids' activities,
                  known for our commitment to safety, quality, and fun.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <Image
                    src="/qualityAssuredFooter.svg"
                    alt="Values"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Our Values
                </h3>
                <p className="text-gray-600">
                  We believe in safety first, the power of play, and building a
                  community of happy families and trusted partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute -left-16 -bottom-16 w-48 h-48 opacity-20">
            <Image src="/donut.png" alt="Donut" width={192} height={192} />
          </div>
          <div className="container mx-auto px-4 py-20 text-center relative">
            <h2 className="font-sunny text-5xl mb-4">Still have questions?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-lg">
              Our team is always here to help you with any questions or concerns
              you might have. Whether you need help with a booking or have
              feedback for us, we're all ears!
            </p>
            <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="font-sunny text-5xl text-center mb-12 text-blue-500">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length > 0 ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-2xl shadow-md border-b-4 border-orange-200"
                    >
                      <AccordionTrigger className="text-lg font-bold text-gray-800 text-left p-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 px-6 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-center text-gray-500">
                  No questions found. Try a different search term!
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
