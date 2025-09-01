"use client";

import React, { useState, useEffect } from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { allPlayhouses } from "@/data/playhouses";
import { useDebounce } from "../hooks/useDebounce";
import Image from "next/image";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [suggestions, setSuggestions] = useState<typeof allPlayhouses>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  // const [inPage, setInPage] = useState<boolean>(false);

  // useEffect(() => {
  //   setInPage(true);

  //   return () => {
  //     setInPage(false);
  //   };
  // }, []);

  useEffect(() => {
    if (debouncedSearchQuery.length > 0) {
      const filtered = allPlayhouses.filter((playhouse) => {
        const matchesQuery =
          playhouse.name
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) ||
          playhouse.location
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase());

        const matchesCity = selectedCity
          ? playhouse.city === selectedCity
          : true;

        return matchesQuery && matchesCity;
      });
      setSuggestions(filtered);
      setIsSuggestionsOpen(true);
    } else {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  }, [debouncedSearchQuery, selectedCity]);

  const handleSearch = () => {
    router.push(`/listings?q=${searchQuery}&city=${selectedCity}`);
  };

  const handleSuggestionClick = (playhouse: (typeof allPlayhouses)[0]) => {
    setSearchQuery(playhouse.name);
    setSelectedCity(playhouse.city);
    setIsSuggestionsOpen(false);
  };

  return (
    <section className="relative bg-white pt-20 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Placeholder */}
      <Image
        width={300}
        height={0}
        src="/toffee.png"
        alt=""
        className="max-w-md h-auto absolute bottom-24 animate-float-fast"
      />

      <Image
        width={400}
        height={0}
        src="/gifs/donut.gif"
        alt="donut eating gif"
        // unoptimized
        className="absolute -top-20 opacity-15 sm:left-[40%]"
      />

      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full opacity-10 animate-pulse" />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="mx-6 sm:mx-24 flex lg:flex-row flex-col-reverse items-center justify-between">
          {/* Left Column */}
          <div className="w-full sm:w-[80%] text-center lg:text-left">
            <Image
              width={700}
              height={0}
              src="/hero_text.png"
              alt=""
              className="mx-auto sm:w-[60%] lg:-translate-x-44 h-auto mb-6 sm:mb-32"
            />

            {/* Search Bar */}
            <div className="mt-10 w-full bg-white rounded-3xl lg:rounded-full bg-gradient-to-r from-[#FF8F01] via-[#F8FF00] to-[#FF0000] shadow-md p-1">
              <div className="bg-white rounded-3xl lg:rounded-full p-8 flex flex-col lg:flex-row items-center gap-4">
                {/* Search Playzone */}
                <div className="relative w-full flex-1 border border-[#FF8000] rounded-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Playzone or Location"
                    className="pl-10  pr-3 py-4 w-full rounded-full focus:outline-none text-sm quicksand-semibold"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {isSuggestionsOpen && suggestions.length > 0 && (
                    <div className="absolute overflow-y-scroll max-h-52 top-full mt-2 w-full bg-white rounded-lg shadow-lg z-10">
                      {suggestions.map((playhouse) => (
                        <div
                          key={playhouse.id}
                          onClick={() => handleSuggestionClick(playhouse)}
                          className="p-4 hover:bg-gray-100 cursor-pointer"
                        >
                          <p className="font-bold">{playhouse.name}</p>
                          <p className="text-sm text-gray-500">
                            {playhouse.location}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Select City */}
                <div className="relative flex-[0.5] w-full pr-4  border border-[#FF8000] rounded-full ">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <select
                    className="pl-10 py-4 w-full rounded-full bg-white focus:outline-none text-sm text-gray-500 quicksand-semibold"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>

                {/* Date */}
                <div className="relative flex-[0.5] w-full border border-[#FF8000] rounded-full">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="pl-10 pr-3 py-4 w-full rounded-full focus:outline-none text-sm quicksand-semibold"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-32 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-semibold text-sm quicksand-semibold"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons (placeholders) */}
            <div className="w-full flex items-center justify-center">
              <div className="mt-8 flex flex-col sm:flex-row w-[70%] md:w-full lg:w-[70%] gap-4">
                <button
                  onClick={() => router.push("/listings")}
                  className="group w-full border flex items-center justify-between px-4 border-orange-300 bg-orange-50  rounded-full py-3"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      width={20}
                      height={20}
                      src="/ExploreHome.svg"
                      alt="explore image"
                    />
                    <span className="quicksand-bold text-sm sm:text-base">
                      Explore Best Playzone
                    </span>
                  </div>
                  <ArrowRight className="duration-300 group-hover:-rotate-45" />
                </button>
                <button className="group w-full flex items-center justify-between px-4 border border-pink-300  bg-pink-50 rounded-full py-3">
                  <div className="flex gap-2 items-center">
                    <Image
                      width={20}
                      height={20}
                      src="/LocationHome.svg"
                      alt="location icon"
                    />
                    <span className="quicksand-bold text-sm sm:text-base">
                      Find Nearby
                    </span>
                  </div>
                  <ArrowRight className="group-hover:-rotate-45 duration-300" />
                </button>
              </div>
            </div>

            {/* Helper Text */}
            <p className="mt-6 text-sm text-gray-500 text-center quicksand-medium">
              find playzone within 5 - 50Km radius of your location • Get
              distance & Directions • Perfect for family outings
            </p>
          </div>

          {/* Right Column Placeholder */}
          <div className="relative flex items-center justify-center -mt-32">
            <div className="max-w-lg h-full flex items-center justify-center ">
              {/* <Image
                width={1000}
                height={0}
                src="/fun_beano_hero_home_background.png"
                alt=""
                className={`mt-24 sm:mt-0 w-[70%] sm:w-full h-full duration-1000 ${
                  inPage ? "scale-100" : "scale-0"
                }`}
              />
              <Image
                width={1000}
                height={500}
                src="/fun_beano_hero_home_character.svg"
                alt=""
                className={`mt-24 absolute sm:mt-0  sm:w-full h-[200px] md:h-[300px] lg:h-[500px] 
                 
                 ${inPage ? "-translate-y-12 " : "translate-y-full"}
                 duration-1000 `}
              />

              <div className="w-[410px] mask-y-from-10% mask-y-to-0% h-[250px] absolute bg-white top-96 translate-x-8" /> */}

              <video
                // width="600"
                // height="500"
                className="lg:w-[600px] h-auto"
                src="/hero_main.mp4"
                // controls
                muted
                playsInline
                autoPlay
              />
              {/* <source type="video/mp4" />
              </video> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
