// src/app/success-page/page.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Testimonial data for easier mapping
const testimonials = [
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-1.jpg", // Replace with actual image paths
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-2.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-3.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-4.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-5.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-6.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-7.jpg",
  },
  {
    text: "I am associated with them since 12 years and got good leads, Loved their services",
    name: "Anand Bajaj",
    title: "Ceo of ABC Company",
    avatar: "/placeholder-avatar-8.jpg",
  },
];

// Placeholder for smaller circular images at the top
const smallAvatars = [
  "/placeholder-small-avatar-1.jpg",
  "/placeholder-small-avatar-2.jpg",
  "/placeholder-small-avatar-3.jpg",
  "/placeholder-small-avatar-4.jpg",
  "/placeholder-small-avatar-5.jpg",
  "/placeholder-small-avatar-6.jpg",
  "/placeholder-small-avatar-7.jpg",
];

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl  bg-gradient-to-b from-orange-500 via-orange-500 to-red-600 bg-clip-text text-transparent sunny-spells">
            Our customers speak for us
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            - here&apos;s what they say
          </p>
        </div>

        {/* Circular Avatar Section */}
        <div className="relative flex justify-center items-center h-64 mb-16">
          {/* Main central image */}
          <div className="absolute z-10">
            <Image
              src="/placeholder-main-avatar.jpg" // Replace with actual image path
              alt="Main testimonial user"
              width={160}
              height={160}
              className="rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Smaller surrounding images with unique positions */}
          <div className="absolute" style={{ top: "10%", left: "20%" }}>
            <Image
              src={smallAvatars[0]}
              alt="User"
              width={60}
              height={60}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ top: "15%", left: "40%" }}>
            <Image
              src={smallAvatars[1]}
              alt="User"
              width={80}
              height={80}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ top: "10%", right: "20%" }}>
            <Image
              src={smallAvatars[2]}
              alt="User"
              width={70}
              height={70}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ top: "40%", right: "15%" }}>
            <Image
              src={smallAvatars[3]}
              alt="User"
              width={90}
              height={90}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ bottom: "20%", left: "30%" }}>
            <Image
              src={smallAvatars[4]}
              alt="User"
              width={50}
              height={50}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ bottom: "10%", right: "35%" }}>
            <Image
              src={smallAvatars[5]}
              alt="User"
              width={65}
              height={65}
              className="rounded-full object-cover shadow"
            />
          </div>
          <div className="absolute" style={{ top: "55%", left: "10%" }}>
            <Image
              src={smallAvatars[6]}
              alt="User"
              width={75}
              height={75}
              className="rounded-full object-cover shadow"
            />
          </div>
          {/* Add more as needed to match the image precisely */}

          {/* Abstract background circles */}
          <div
            className="absolute w-12 h-12 bg-red-100 rounded-full"
            style={{
              top: "25%",
              left: "25%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            className="absolute w-8 h-8 bg-blue-100 rounded-full"
            style={{
              top: "35%",
              right: "28%",
              transform: "translate(50%, -50%)",
            }}
          ></div>
          <div
            className="absolute w-10 h-10 bg-yellow-100 rounded-full"
            style={{
              bottom: "15%",
              left: "45%",
              transform: "translate(-50%, 50%)",
            }}
          ></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative"
            >
              <p className="text-gray-700 leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              {index === 1 && ( // Add quote icon to the second testimonial for example
                <span className="absolute bottom-6 right-6 text-gray-300 text-6xl font-serif">
                  ”
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button className="px-8 py-3 rounded-full  transition-colors">
            Load More
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
