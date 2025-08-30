"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ReturnGiftsPage() {
  return (
    <>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
        <div className="max-w-md w-full">
          <div className="mb-8 float-animation">
            <Image
              src="/coming-soon.jpg"
              alt="Rocket Launching Soon"
              width={512}
              height={0}
              className="mx-auto rounded-lg"
            />
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Get Ready for Blast Off!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our super fun return gifts are launching soon. Be the first to know
            when we go live!
          </p>

          <div className="flex max-w-sm mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow text-lg p-4 rounded-r-none"
            />
            <Button type="submit" className="p-4 rounded-l-none">
              <Send className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
