/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0024A8]  to-[#001B3A] text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl px-16 lg:px-0 pt-16 mx-auto flex flex-col sm:flex-row items-center gap-24">
        {/* left */}
        <div className="max-w-xs flex flex-col items-center sm:items-start">
          <Image
            width={130}
            height={0}
            src="/FooterLogo.png"
            alt="fun beano footer logo"
            className="max-w-[130] h-auto"
          />

          <p className="quicksand-medium text-xl text-center sm:text-left mt-8">
            India&apos;s ONLY delegated and trusted platform for discovering
            enchanting playhouses and crafting eternal memories for your
            children.
          </p>

          {/* telephone */}
          <a
            href="tel:+91 82106 52122"
            className="mt-8 flex items-center gap-4 quicksand-bold text-2xl hover:underline underline-offset-8"
          >
            <Image
              src="/icons/callFooter.svg"
              alt="calling icon"
              width="30"
              height="30"
            />
            +91 82106 52122
          </a>

          {/* mail */}
          <a
            href="mailto:hello@funbeano.in"
            className="mt-8 flex items-center gap-4 quicksand-bold text-2xl hover:underline underline-offset-8"
          >
            <Image
              src="/icons/smsFooter.svg"
              alt="calling icon"
              width="30"
              height="30"
            />
            hello@funbeano.in
          </a>

          {/* mail */}
          <a
            href=""
            className="mt-8 flex items-center gap-4 quicksand-bold text-2xl hover:underline underline-offset-8"
          >
            <Image
              src="/icons/locationFooter.svg"
              alt="calling icon"
              width="30"
              height="30"
            />
            New Delhi, Saket
          </a>
        </div>

        {/* right */}
        <div className="">
          {/* newsletter */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full md:w-auto p-4 rounded-full border border-green-300 text-green-800"
            />

            <input
              type="tel"
              maxLength={10}
              placeholder="+91 8216 521 22"
              className="w-full md:w-auto p-4 rounded-full border border-green-300 text-green-800"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-auto p-4 rounded-full border border-green-300 text-green-800"
            />

            <button className="bg-[#CAFFBF] w-full md:w-auto quicksand-bold text-base p-4 px-8 rounded-full text-green-800 border-2 border-transparent hover:border-[#CAFFBF] hover:bg-transparent hover:text-[#CAFFBF] duration-300">
              submit
            </button>
          </div>

          <label className="flex mt-4 gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="newsletter-checkbox"
              className="accent-green-300"
            />
            <span className="quicksand-semibold text-white">
              share me news letter in my email
            </span>
          </label>

          {/* links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 place-items-center md:place-items-start">
            {/* 1 */}
            <div className="">
              <h1 className="quicksand-bold text-3xl text-[#FFF600]">
                Quick Links
              </h1>
              <ul className="space-y-4 mt-4 quicksand-semibold text-center md:text-left">
                <li>
                  <a
                    href="/listings"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Browse Playzoness
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Book a Visit
                  </a>
                </li>
                <li>
                  <a
                    href="/listings?filter=birthday"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Birthday Parties
                  </a>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div className="mt-8 md:mt-0">
              <h1 className="quicksand-bold text-3xl text-[#CAFFBF]">
                For Parents
              </h1>
              <ul className="space-y-4 mt-4 quicksand-semibold text-center md:text-left">
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Age Recommendations
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Health & Hygiene
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Parenting Tips
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="mt-8 md:mt-0">
              <h1 className="quicksand-bold text-3xl text-[#FED7A5]">
                For Businesses
              </h1>
              <ul className="space-y-4 mt-4 quicksand-semibold text-center md:text-left">
                <li>
                  <a
                    href="/create-listing"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    List Your Playzone
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Partner Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Marketing Tools
                  </a>
                </li>
                <li>
                  <a
                    href="/success-stories"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="/listings"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <hr className="max-w-7xl my-12 sm:my-24 mx-auto" />
      <div className="mx-auto max-w-7xl flex items-center justify-evenly flex-wrap space-y-8">
        {[
          {
            id: 1,
            title: "100% Safe",
            link: "/Funbeano-logo-3.png",
            desc: "All our partners are verified for safety standards",
          },
          {
            id: 2,
            title: "24/7 Support",
            link: "/safetyMainFox.png",
            desc: "Always here to help with booking and queries",
          },
          {
            id: 3,
            title: "10K Trust",
            link: "/trustFooterIcon.svg",
            desc: "Families across India trust our platform",
          },
          {
            id: 4,
            title: "Quality Assured",
            link: "/qualityAssuredFooter.svg",
            desc: "Premium playzones with excellent ratings",
          },
        ].map((items) => (
          <div className="flex flex-col gap-2 sm:gap-4" key={items.title}>
            <div className="min-w-[120] min-h-[120] mx-auto rounded-full bg-white flex items-center justify-center">
              <Image
                width={70}
                height={0}
                src={items.link}
                alt={items.link}
                className={items.id === 1 || items.id === 2 ? "w-[75%]" : ""}
              />
            </div>
            <h4 className="quicksand-bold text-lg sm:text-2xl text-white text-center">
              {items.title}
            </h4>
            <p className="quicksand-medium text-white text-sm sm:text-xl max-w-52 text-center">
              {items.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 3rd section */}
      <hr className="max-w-7xl my-12 sm:my-24 mx-auto " />
      <div className="px-12 lg:px-0 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 justify-between max-w-7xl mx-auto">
        <span className="flex quicksand-semibold text-base">
          @2025 Funbeano. Made with{" "}
          <Image
            width={20}
            height={0}
            src="/icons/doubleHeartFooter.svg"
            alt="heart icon"
            className="mx-2"
          />{" "}
          for kids
        </span>

        {/* terms */}
        <div className="space-x-8">
          <Link
            href=""
            className="quicksand-semibold text-white text-base hover:underline underline-offset-8 hover:text-green-500 duration-300"
          >
            Terms of use
          </Link>
          <Link
            href=""
            className="quicksand-semibold text-white text-base hover:underline underline-offset-8 hover:text-orange-500 duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href=""
            className="quicksand-semibold text-white text-base hover:underline underline-offset-8 hover:text-yellow-500 duration-300"
          >
            Cookie Policy
          </Link>
        </div>

        {/* social icons */}
        <div className="space-x-8 md:space-x-2 flex justify-evenly">
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              width={50}
              height={50}
              src={"/icons/ThreadIcon.svg"}
              alt={"Thread icon"}
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              width={50}
              height={50}
              src={"/icons/PinterestIcon.svg"}
              alt={"Thread icon"}
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>

          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              width={50}
              height={50}
              src={"/icons/FacebookIcon.svg"}
              alt={"Thread icon"}
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>

          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/TwitterIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/InstaIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/YoutubeIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-14 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/WhatsappIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 group-hover:scale-90 duration-300"
            />
          </Link>
        </div>
      </div>

      <img
        // width={200}
        // height={0}
        src="/BrandNameFooter.png"
        alt="brand name"
        className="w-[80%] mx-auto mt-12 sm:mt-24"
      />

      <div className="h-24" />
    </footer>
  );
}
