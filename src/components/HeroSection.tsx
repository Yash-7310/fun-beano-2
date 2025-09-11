"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { allPlayhouses } from "@/data/playhouses";
import { useDebounce } from "../hooks/useDebounce";
import Image from "next/image";
import Lottie from "lottie-react";
import Funbeano from "../../public/json-animation/Funbeno.json";
import Baloon1 from "../../public/json-animation/Baloon1.json";
import Baloon2 from "../../public/json-animation/Baloon2.json";
import Baloon3 from "../../public/json-animation/Baloon3.json";
import Baloon4 from "../../public/json-animation/Baloon4.json";
import { toast } from "sonner";

export function HeroSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [suggestions, setSuggestions] = useState<typeof allPlayhouses>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [inPage, setInPage] = useState<boolean>(false);

  const handleShowPicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInPage(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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

  const handleFindNearby = () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            router.push(`/listings?lat=${latitude}&long=${longitude}`);
          });
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              router.push(`/listings?lat=${latitude}&long=${longitude}`);
            },
            (error) => {
              // User likely clicked "Don't allow" this time
              toast.error("We need your location to find playzones near you.");
            }
          );
        } else if (result.state === "denied") {
          // Permission has been permanently denied
          toast.error(
            "You have blocked location access. To use this feature, please enable location permissions for this site in your browser settings.",
            {
              duration: 10000, // Show for 10 seconds
            }
          );
        }
      });
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section className="relative mx-auto bg-white pt-44 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
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
        className="absolute top-72 left-[20%] sm:-top-20 opacity-15 sm:left-[40%]"
      />

      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full opacity-10 animate-pulse" />

      <div className="relative w-full mx-auto  sm:px-6 lg:px-8 z-10">
        <div className="mx-6 sm:mx-24 flex lg:flex-row flex-col-reverse items-center justify-between">
          {/* Left Column */}
          <div className="w-full sm:w-[80%] md:w-full lg:w-[80%] mt-10 sm:mt-0 text-center lg:text-left">
            <Image
              width={700}
              height={0}
              src="/hero_text.png"
              alt=""
              className="mx-auto  md:w-full lg:w-[60%] lg:-translate-x-44 h-auto mb-6 sm:mb-32"
            />

            {/* Search Bar */}
            <div className="mt-10 w-full bg-white rounded-3xl lg:rounded-full bg-[linear-gradient(to_right,#FF8F01_0%,#F8FF00_40%,#FF0000_70%,#FF8F01_100%)] shadow-md p-1 bg-[length:200%_200%] animate-[shine_5s_linear_infinite]">
              <div className="bg-white rounded-3xl lg:rounded-full p-8 flex flex-col lg:flex-row items-center gap-4">
                {/* Search Playzone */}
                <div className="relative w-full flex-1 border border-[#FF8000] rounded-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Playzone or Location"
                    className="pl-10  pr-3 py-4 w-full rounded-full focus:outline-none text-sm text-gray-500 quicksand-semibold"
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
                <div className="relative flex-[0.5] w-full pr-4  border border-[#FF8000] rounded-full cursor-pointer">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 w-5 h-5" />
                  <select
                    className="pl-10 py-4 w-full rounded-full bg-white focus:outline-none text-sm text-gray-500 quicksand-semibold cursor-pointer"
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
                    type="date"
                    placeholder="DD/MM/YYYY"
                    className="pl-10 pr-3 py-4 w-full rounded-full focus:outline-none text-sm quicksand-semibold text-gray-500 cursor-pointer"
                    value={selectedDate}
                    ref={inputRef}
                    onClick={handleShowPicker}
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
                <button
                  onClick={handleFindNearby}
                  className="group w-full flex items-center justify-between px-4 border border-pink-300  bg-pink-50 rounded-full py-3"
                >
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
              Find playzone within 5 - 50Km radius of your location • Get
              distance & Directions • Perfect for family outings
            </p>
          </div>

          {/* Right Column FunBeano Animated logo */}
          <div className="relative flex items-center justify-center -mt-32">
            <div className="max-w-lg h-full flex items-center justify-center ">
              <div className="relative mt-24">
                <Lottie
                  animationData={Funbeano}
                  className="w-[200px] sm:w-full"
                  loop={false}
                />
                <Lottie
                  className={`absolute w-32 sm:w-56 top-0 -left-24 md:top-0 md:-left-36  ${
                    inPage
                      ? "translate-y-0 translate-x-0 scale-100 opacity-100"
                      : "translate-y-40 sm:translate-y-80 translate-x-24 sm:translate-x-40 scale-0 z-20 opacity-0"
                  } duration-[4500ms] transition-all ease-in-out`}
                  animationData={Baloon3}
                />
                <Lottie
                  className={`absolute w-32 sm:w-56 -top-10 -left-16 md:-top-20 md:-left-24 ${
                    inPage
                      ? "translate-y-0 translate-x-0 scale-100 opacity-100"
                      : "translate-y-40 sm:translate-y-80 translate-x-24 sm:translate-x-40 scale-0 z-20 opacity-0"
                  } duration-[4500ms] transition-all ease-in-out`}
                  animationData={Baloon4}
                />
                <Lottie
                  className={`absolute w-32 sm:w-56 -top-10 -right-16 md:-top-20 md:-right-28 ${
                    inPage
                      ? "translate-y-0 translate-x-0 scale-100 opacity-100"
                      : "translate-y-40 sm:translate-y-80 -translate-x-20 sm:-translate-x-44 scale-0 z-20 opacity-0"
                  } duration-[4500ms] transition-all ease-in-out `}
                  animationData={Baloon1}
                />
                <Lottie
                  className={`absolute w-32 sm:w-56 top-0 -right-20 md:top-0 md:-right-36 ${
                    inPage
                      ? "translate-y-0 translate-x-0 scale-100 opacity-100"
                      : "translate-y-40 sm:translate-y-80 -translate-x-24 sm:-translate-x-44 scale-0 z-20 opacity-0"
                  } duration-[4700ms] transition-all ease-in-out`}
                  animationData={Baloon2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
