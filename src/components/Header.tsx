"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  User,
  Gift,
  Heart,
  GitCompareArrows,
  Bell,
  Home as HomeIcon,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();
  // Placeholder for authentication state
  const isAuthenticated = true;
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  // const user: any = { name: "Ananya" }; // Example user

  console.log(isNotificationOpen);

  useEffect(() => {
    if (isNotificationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // return () => {
    //   setIsNotificationOpen(false);
    //   document.body.style.overflow = "auto";
    // };
  }, [isNotificationOpen]);

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo Placeholder */}
              <div
                className="flex items-center cursor-pointer"
                onClick={() => router.push("/home")}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    width={100}
                    height={0}
                    src="/Logo.svg"
                    alt="logo image"
                  />
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium quicksand-bold">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/listings"); // Redirects to old "Browse" page
                  }}
                  className=" hover:text-orange-500 transition-colors"
                >
                  Explore Playzones
                </a>
                <a
                  href="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isAuthenticated) {
                      router.push("/create-listing");
                    } else {
                      router.push("/signin");
                    }
                  }}
                  className="hover:text-orange-500 transition-colors"
                >
                  List your Playzone
                </a>
                <Link
                  href="/blog"
                  className="hover:text-orange-500 transition-colors"
                >
                  Blogs
                </Link>
                <Button
                  onClick={() => router.push("/return-gifts")}
                  variant="outline"
                  className="rounded-full flex justify-between cursor-pointer border-2 border-gray-200 hover:border-secondary hover:bg-secondary hover:z-10 group bg-[#EFEFEF] overflow-clip"
                >
                  {/* <Gift className="w-5 h-5 mr-2 text-red-500" /> */}
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 bg-secondary" />
                  <Image
                    width={20}
                    height={0}
                    src="/icons/return_gift.svg"
                    alt="return gifts image"
                    className="group-hover:scale-[100] opacity-1 group-hover:opacity-0 duration-700 "
                  />

                  <span className="z-10 group-hover:-translate-x-4 duration-300 group-hover:text-white">
                    Return gifts
                  </span>
                </Button>
                <Link
                  href="/get-free-advice/"
                  className="rounded-full bg-orange-500 hover:bg-transparent border-2 border-transparent hover:border-orange-500 hover:text-orange-500 duration-300 text-white px-4 py-1"
                >
                  Get Free Advice
                </Link>
              </nav>
            </div>

            {/* Action Buttons and User Profile */}
            <div className="hidden lg:flex items-center space-x-4 quicksand-bold">
              {/* wishlist button */}
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-red-100 text-red-500 relative group hover:bg-red-100"
                onClick={() => router.push("/wishlist")}
              >
                <Heart className="w-5 h-5 group-hover:scale-125 duration-300" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Button>
              {/* compare button */}
              <div className="flex items-center space-x-2 border group hover:border-neutral-200 rounded-full p-1">
                <Button
                  variant="ghost"
                  className="rounded-full  group-hover:bg-neutral-200 duration-300"
                  onClick={() => router.push("/compare")}
                >
                  <GitCompareArrows className="w-5 h-5 mr-2 group-hover:scale-125 duration-300" />
                  Compare
                  {compareList.length > 0 && (
                    <span className="ml-2 bg-black text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {compareList.length}
                    </span>
                  )}
                </Button>
              </div>
              {isAuthenticated ? (
                <div className="flex items-center space-x-2 ">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-neutral-200 hover:bg-neutral-300 group"
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  >
                    <Bell className="w-6 h-6 group-hover:scale-125 duration-300" />
                  </Button>
                  <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center cursor-pointer group">
                    <User className="w-4 h-4 text-black group-hover:scale-125 duration-300" />
                  </div>
                </div>
              ) : (
                <Button onClick={() => router.push("/signin")}>Sign In</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation for Mobile/Tablet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-20">
          {/* 1. Playzones */}
          <button
            onClick={() => router.push("/listings")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <HomeIcon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Playzones</span>
          </button>

          {/* 2. Compare */}
          <button
            onClick={() => router.push("/compare")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors relative"
          >
            <GitCompareArrows className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Compare</span>
            {compareList.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {compareList.length}
              </span>
            )}
          </button>

          {/* Blog */}
          {/* <button
            onClick={() => router.push("/blog")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <BookOpenText className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Blog</span>
          </button> */}

          {/* 3. Return gifts (Bigger) */}
          <button
            onClick={() => router.push("/return-gifts")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors -mt-6"
          >
            <div className="bg-orange-500 rounded-full p-4 shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <span className="text-xs font-medium mt-2">Return gifts</span>
          </button>

          {/* 4. Wishlist */}
          <button
            onClick={() => router.push("/wishlist")}
            className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors relative"
          >
            <Heart className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* 5. Profile */}
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors">
            <User className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>

      {/* notification block */}
      <div
        className={`sticky top-0 ${
          !isNotificationOpen
            ? "opacity-0 -z-50 duration-1000"
            : "opacity-100 z-50 w-full h-full"
        } z-20`}
      >
        {isNotificationOpen && (
          <div className="w-screen h-screen absolute bg-black/55 z-50" />
        )}
        <div
          className={`h-[50vh] w-96 z-50 flex items-center justify-center rounded-b-3xl bg-white top-0 absolute right-20 
      transform transition-transform duration-500 ease-in-out
      ${isNotificationOpen ? "block" : "hidden"}`}
        >
          <h4 className="quicksand-semibold">No notifications yet.</h4>
        </div>
      </div>
    </>
  );
}
