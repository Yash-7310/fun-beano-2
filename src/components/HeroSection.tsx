"use client";

import React from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-white pt-20 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Placeholder */}
      <img
        src="/toffee.png"
        alt=""
        className="max-w-md h-auto absolute bottom-24 animate-bounce"
      />

      <img
        src="/donut.png"
        alt=""
        className="max-w-lg absolute top-20 right-80 animate-bounce"
      />

      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full opacity-10 animate-pulse" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-24 flex items-center justify-between">
          {/* Left Column */}
          <div className="w-[60%] text-center lg:text-left">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Bean up the fun with FunBeano
            </h1> */}

            <img src="/hero_text.png" alt="" className="w-[80%] h-auto mb-32" />

            {/* Search Bar */}
            <div className="mt-10  bg-white rounded-full bg-gradient-to-r from-[#FF8F01] via-[#F8FF00] to-[#FF0000] shadow-md p-1">
              <div className="bg-white rounded-full p-8 flex flex-col md:flex-row items-center gap-4">
                {/* Search Playzone */}

                <div className="relative flex-1 border border-[#FF8000] rounded-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Playzone"
                    className="pl-10 pr-3 py-4 w-full rounded-full focus:outline-none text-sm"
                  />
                </div>

                {/* Select City */}
                <div className="relative flex-1 pr-4  border border-[#FF8000] rounded-full ">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <select className="pl-10 py-4 w-full rounded-full bg-white focus:outline-none text-sm text-gray-500">
                    <option>Select City</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                  </select>
                </div>

                {/* Date */}
                <div className="relative flex-1  border border-[#FF8000] rounded-full">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="pl-10 pr-3 py-4 w-full rounded-full focus:outline-none text-sm"
                  />
                </div>

                {/* Search Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-semibold text-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons (placeholders) */}
            <div className="w-full flex items-center justify-center">
              <div className="mt-8 flex flex-col sm:flex-row w-[70%] gap-4">
                <button
                  onClick={() => router.push("/listings")}
                  className="group w-full border flex items-center justify-between px-4 border-orange-300 bg-orange-50 text-orange-600 rounded-full py-3"
                >
                  <span>Explore Best Playhouse</span>
                  <ArrowRight className="duration-300 group-hover:-rotate-45" />
                </button>
                <button className="group w-full flex items-center justify-between px-4 border border-pink-300 text-pink-600 bg-pink-50 rounded-full py-3">
                  <span>Find Nearby</span>
                  <ArrowRight className="group-hover:-rotate-45 duration-300" />
                </button>
              </div>
            </div>

            {/* Helper Text */}
            <p className="mt-6 text-xs text-gray-500 text-center">
              find playhouse within 5 - 50Km radius of your location • Get
              distance & Directions • Perfect for family outings
            </p>
          </div>

          {/* Right Column Placeholder */}
          <div className="relative flex items-center justify-center -mt-32">
            <div className="max-w-lg h-auto flex items-center justify-center ">
              <img
                src="/fun_beano_hero_home.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
