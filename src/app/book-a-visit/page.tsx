"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PartyPopper, Send } from "lucide-react";

export default function BookVisitPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-animation-delay {
          animation: float 5s ease-in-out infinite 1s;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-amber-100 to-orange-200 py-16 px-4 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 opacity-30 float-animation">
          <Image src="/donut.png" alt="Donut" width={256} height={256} />
        </div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 opacity-30 float-animation-delay">
          <Image src="/toffee.png" alt="Toffee" width={288} height={288} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-sunny text-6xl md:text-7xl text-orange-600">
              Let's Plan a Fun Day!
            </h1>
            <p className="text-lg text-orange-800/80 mt-2">
              We can't wait to see you! Fill out the form below to book your
              visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border-4 border-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex  items-center">
                <PartyPopper className="mr-3 h-8 w-8 text-rose-500" />
                Booking Details
              </h2>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Parent's Name"
                  className="py-6"
                />
                <Input
                  type="text"
                  placeholder="Child's Name"
                  className="py-6"
                />
                <Input
                  type="number"
                  placeholder="Child's Age"
                  className="py-6"
                />
                <Select>
                  <SelectTrigger className="py-6">
                    <SelectValue placeholder="Which Playhouse?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="little-einsteins">
                      Little Einsteins Learning Center
                    </SelectItem>
                    <SelectItem value="happy-hearts">
                      Happy Hearts Playhouse
                    </SelectItem>
                    <SelectItem value="adventure-academy">
                      Adventure Academy Kids
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="py-6"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="py-6"
                />
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-bold bg-rose-500 hover:bg-rose-600 text-white rounded-full"
                >
                  Book My Visit!
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-lg border-4 border-white">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                Select a Date
              </h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-2xl flex-col p-4 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
