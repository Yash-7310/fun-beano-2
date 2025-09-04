"use client";

import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Data for the city cards
const popularCities = [
  {
    name: "Mumbai",
    image: "/Mumbai.png",
  },
  {
    name: "Delhi",
    image: "/Delhi.png",
  },
  {
    name: "Bangalore",
    image: "/Bangalore.png",
  },
  {
    name: "Chennai",
    image: "/Chennai.png",
  },
  {
    name: "Hyderabad",
    image: "/Hyderabad.png",
  },
  {
    name: "Kolkata",
    image: "/Kolkata.png",
  },
];

// Reusable City Card Component
const CityCard = ({ name, image }: { name: string; image: string }) => (
  <div className="relative  rounded-2xl overflow-hidden group cursor-pointer shadow-lg transform  transition-transform duration-300">
    <Image
      width={1000}
      height={0}
      src={image}
      alt={name}
      className="w-full h-40 object-cover group-hover:scale-110 duration-300"
      onError={(e) => {
        (
          e.target as HTMLImageElement
        ).src = `https://placehold.co/400x300/f97316/ffffff?text=${name}`;
      }}
    />
    <Link
      href={`/listings?city=${name}`}
      className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center pb-4"
    >
      <h3 className="text-white text-sm sm:text-xl quicksand-bold tracking-wider uppercase group-hover:-translate-y-24 duration-300 ">
        {name}
      </h3>
    </Link>
  </div>
);

// Main PopularCities Component
export default function PopularCities() {
  const [selectedCity, setSelectedCity] = useState<
    "" | "Mumbai" | "Delhi" | "Bangalore" | "Chennai" | "Hyderabad" | "Kolkata"
  >("");

  const router = useRouter();
  return (
    <section className="pt-12 bg-gradient-to-l from-[#FFF0F0] to-[#FFF2E1] relative">
      {/* <div className="  bg-gradient-to-l from-[#FFF0F0] to-[#FFF2E1] w-full h-[80%] z-0" /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-5xl tracking-wider sunny-spells"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            POPULAR CITIES TO EXPLORE
          </h2>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {popularCities.map((city) => (
            <CityCard key={city.name} name={city.name} image={city.image} />
          ))}
        </div>

        {/* Immediate Booking Banner */}
        <div className="bg-orange-500 rounded-3xl p-8 pb-12 shadow-2xl text-white relative -bottom-32">
          <div className="flex flex-col  items-center justify-between gap-6">
            {/* Left Side Text */}
            <div className="text-center">
              <h3 className="text-xl sm:text-5xl tracking-wide sunny-spells">
                Let&apos;s make some unforgettable memories
                <span className="text-7xl mx-auto sunny-spells  ">NOW</span>
              </h3>
              <p className="mt-1 text-xl quicksand-semibold">
                Find available slot for today and book instantly
              </p>
            </div>

            {/* Right Side Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-auto">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 " />
                <select
                  value={selectedCity}
                  onChange={(city) => {
                    console.log(city);
                    setSelectedCity(
                      city.target.value as
                        | ""
                        | "Delhi"
                        | "Mumbai"
                        | "Bangalore"
                        | "Chennai"
                        | "Hyderabad"
                        | "Kolkata"
                    );
                  }}
                  className="pl-10 py-3 w-full sm:w-48 rounded-full text-[#656565] focus:outline-none focus:ring-2 focus:ring-orange-300 quicksand-medium cursor-pointer"
                >
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <button
                className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full w-full sm:w-auto flex items-center justify-between hover:bg-orange-50 transition-colors shadow-md group quicksand-bold"
                onClick={() => router.push(`/listings?city=${selectedCity}`)}
              >
                {/* <Rocket className="w-5 h-5 mr-2" /> */}
                <Image
                  width="20"
                  height="0"
                  src="/rocket.png"
                  alt="rocket image"
                  className="w-7 h-auto mr-4"
                />
                Quick Booking
                <ArrowRight className="w-5 h-5 ml-4 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
