"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Search,
  MapPin,
  User,
  Gift,
  Heart,
  GitCompareArrows,
  Bell,
  Home as HomeIcon,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";

export function Header() {
  const router = useRouter();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();
  // Placeholder for authentication state
  const isAuthenticated = true;
  const user: any = { name: "Ananya" }; // Example user

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
                  <img src="/Logo.svg" alt="" />
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
                <a href="#" className="hover:text-orange-500 transition-colors">
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
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Blogs
                </a>
                <Button
                  variant="outline"
                  className="rounded-full flex justify-between border-gray-200 bg-gray-100 hover:bg-gray-200"
                >
                  {/* <Gift className="w-5 h-5 mr-2 text-red-500" /> */}
                  <img src="/icons/return_gift.svg" alt="" />

                  <span>Return gift</span>
                </Button>
                <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
                  Get Free Advice
                </Button>
              </nav>
            </div>

            {/* Action Buttons and User Profile */}
            <div className="hidden lg:flex items-center space-x-4 quicksand-bold">
              {/* wishlist button */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-red-100 text-red-500 relative"
                onClick={() => router.push("/wishlist")}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Button>
              {/* compare button */}
              <div className="flex items-center space-x-2 border rounded-full p-1">
                <Button
                  variant="ghost"
                  className="rounded-full"
                  onClick={() => router.push("/compare")}
                >
                  <GitCompareArrows className="w-5 h-5 mr-2" />
                  Compare
                  {compareList.length > 0 && (
                    <span className="ml-2 bg-black text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {compareList.length}
                    </span>
                  )}
                </Button>
              </div>
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Bell className="w-6 h-6" />
                  </Button>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                    <User className="w-5 h-5 text-white" />
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

          {/* 3. Return gifts (Bigger) */}
          <button className="flex flex-col items-center justify-center text-gray-600 hover:text-orange-500 transition-colors -mt-6">
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
    </>
  );
}
