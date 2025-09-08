/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0024A8]  to-[#001B3A] text-white pb-10">
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
          <Link
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
          </Link>

          {/* mail */}
          <Link
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
          </Link>

          {/* mail */}
          <Link
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
          </Link>
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
                  <Link
                    href="/listings"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Browse Playzoness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/book-a-visit"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Book a Visit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings?filter=birthday"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Birthday Parties
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div className="mt-8 md:mt-0">
              <h1 className="quicksand-bold text-3xl text-[#CAFFBF]">
                For Parents
              </h1>
              <ul className="space-y-4 mt-4 quicksand-semibold text-center md:text-left">
                {/* <li>
                  <Link
                    href="/blog#safety-guidelines"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Safety Guidelines
                  </Link>
                </li> */}
                {/* <li>
                 <Link
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Age Recommendations
                 </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/blog#health-hygiene"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Health & Hygiene
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    href="/blog#parenting-tips"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Parenting Tips
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/faq"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories"
                    className="text-white/80 hover:text-[#CAFFBF] transition-colors text-lg hover:underline"
                  >
                    Stories
                  </Link>
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
                  <Link
                    href="/create-listing"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    List Your Playzone
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Partner Dashboard
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/coming-soon"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Marketing Tools
                  </Link>
                </li> */}

                <li>
                  <Link
                    href="/listings"
                    className="text-white/80 hover:text-[#FED7A5] transition-colors text-lg hover:underline"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <hr className="max-w-7xl my-12 sm:my-24 mx-auto" />
      <div className="mx-auto max-w-7xl flex items-center justify-evenly flex-wrap gap-8">
        {[
          {
            id: 1,
            title: "100% Safe",
            link: "/100_per_safe.png",
            desc: "All our partners are verified for safety standards",
          },
          {
            id: 2,
            title: "24/7 Support",
            link: "/24_7_support.png",
            desc: "Always here to help with booking and queries",
          },
          {
            id: 3,
            title: "10K Trust",
            link: "/10k_trust.png",
            desc: "Families across India trust our platform",
          },
          {
            id: 4,
            title: "Quality Assured",
            link: "/quality_assured.png",
            desc: "Premium playzones with excellent ratings",
          },
        ].map((items) => (
          <div className="flex flex-col gap-2 sm:gap-4" key={items.title}>
            <div className=" mx-auto rounded-full bg-white flex items-center justify-center">
              <Image width={70} height={0} src={items.link} alt={items.link} />
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
        <span className="sm:text-left sm:flex text-center quicksand-semibold text-base">
          @2025 Funbeano. Made with{" "}
          <Image
            width={20}
            height={0}
            src="/icons/doubleHeartFooter.svg"
            alt="heart icon"
            className="sm:mx-2 mx-auto"
          />{" "}
          for kids
        </span>

        {/* terms */}
        <div className="flex gap-4 sm:gap-8 items-center">
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
        <div className="flex justify-evenly flex-wrap gap-6">
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              width={30}
              height={50}
              src={"/icons/ThreadIcon.svg"}
              alt={"Thread icon"}
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              width={50}
              height={50}
              src={"/icons/PinterestIcon.svg"}
              alt={"Thread icon"}
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>

          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              width={50}
              height={50}
              src={"/icons/FacebookIcon.svg"}
              alt={"Thread icon"}
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>

          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/TwitterIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/InstaIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/YoutubeIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 w-10 group-hover:scale-90 duration-300"
            />
          </Link>
          <Link href="" className="relative group">
            <Image
              width={50}
              height={50}
              src="/icons/animatedFox.svg"
              alt="animated fox"
              className="absolute hidden md:block left-3 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 -translate-x-2 z-0"
            />
            <Image
              src={"/icons/WhatsappIcon.svg"}
              alt={"Thread icon"}
              width="50"
              height="50"
              className="z-10 w-10 group-hover:scale-90 duration-300"
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
