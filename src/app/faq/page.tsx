"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const faqSections = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        question: "What is Funbeano?",
        answer:
          "Funbeano is a platform to discover and book the best playhouses and activity centers for your children. We offer a curated selection of safe, fun, and engaging spaces.",
      },
      {
        question: "What is the age range for playhouses?",
        answer:
          "Our playhouses cater to a wide range of ages, typically from 1 to 15 years old. Each playhouse listing specifies the recommended age range for their activities and equipment.",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking & Payments",
    questions: [
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
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, UPI, and various mobile wallets for a smooth and secure payment experience.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Hygiene",
    questions: [
      {
        question: "Are the playhouses safe?",
        answer:
          "Absolutely! We partner with playhouses that meet our high standards for safety and cleanliness. Each listing provides detailed information about their safety measures.",
      },
      {
        question: "What are your hygiene standards?",
        answer:
          "All our partner playzones adhere to strict hygiene protocols, including regular sanitization of equipment and play areas, to ensure a clean and healthy environment for your children.",
      },
    ],
  },
  {
    id: "business",
    title: "For Businesses",
    questions: [
      {
        question: "How can I list my playzone on Funbeano?",
        answer:
          "We'd love to have you! Please navigate to the 'List your Playzone' section of our website and fill out the application form. Our team will get in touch with you.",
      },
    ],
  },
];

export default function FaqPage() {
  const sectionRefs = {
    general: useRef<HTMLDivElement>(null),
    booking: useRef<HTMLDivElement>(null),
    safety: useRef<HTMLDivElement>(null),
    business: useRef<HTMLDivElement>(null),
  };

  const handleScrollTo = (id: keyof typeof sectionRefs) => {
    const node = sectionRefs[id].current;
    if (node) {
      const y = node.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <style jsx>{`
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
        .accordion-content[data-state="open"] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .accordion-content[data-state="closed"] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-400 to-rose-400 text-white py-20">
          <div className="container mx-auto px-4 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-8">
              Everything you need to know about our product and how it works.
              Can&apos;t find an answer?
            </p>
            <Button className="bg-white text-rose-500 hover:bg-gray-100 rounded-full py-6 px-12 font-bold text-lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat to our team
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Aside Nav */}
            <aside className="md:col-span-1 md:sticky top-24 self-start border-r-2 border-orange-200">
              <nav className="flex flex-col space-y-2">
                {faqSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() =>
                      handleScrollTo(section.id as keyof typeof sectionRefs)
                    }
                    className="text-left text-lg font-semibold text-gray-600 hover:text-orange-500 p-3 rounded-lg transition-colors hover:bg-orange-50"
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* FAQ Content */}
            <main className="md:col-span-3">
              <div className="space-y-12">
                {faqSections.map((section) => (
                  <div
                    key={section.id}
                    ref={sectionRefs[section.id as keyof typeof sectionRefs]}
                  >
                    <h2
                      id={section.id}
                      className="text-3xl font-bold text-gray-800 mb-6 scroll-mt-24"
                    >
                      {section.title}
                    </h2>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full space-y-4"
                    >
                      {section.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${section.id}-${index}`}
                          className="bg-white rounded-2xl shadow-md border-b-4 border-orange-200 overflow-hidden last:border-b-4"
                        >
                          <AccordionTrigger className="text-lg font-semibold text-gray-800 text-left p-6 hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-gray-600 px-6 pb-6 accordion-content">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </section>
      </div>
    </>
  );
}
