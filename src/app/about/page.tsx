"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Sparkles, Rocket, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent quicksand-bold">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto quicksand-medium">
            Fun Beano was born from a simple idea: to make every child's day an
            adventure! 🚀
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg border-2 border-red-100">
          <div className="space-y-8">
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 quicksand-bold">
                The Adventure Begins!
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              Once upon a time, a group of parents, just like yours, wanted to
              find the most amazing places for their kids to play. They dreamed
              of a magical map that would show them all the best playzones,
              parks, and fun spots in their city. But this map didn't exist...
              so they decided to build it themselves! And that's how Fun Beano
              was born!
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="text-center bg-red-50 p-6 rounded-xl">
                <Rocket className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 quicksand-bold">
                  Our Mission
                </h3>
                <p className="text-gray-600 mt-2 quicksand-regular">
                  To be the most trusted friend for families, helping them
                  discover safe, fun, and unforgettable play experiences.
                </p>
              </div>
              <div className="text-center bg-yellow-50 p-6 rounded-xl">
                <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 quicksand-bold">
                  Our Values
                </h3>
                <ul className="text-gray-600 mt-2 space-y-1 quicksand-regular">
                  <li>
                    <span className="font-semibold quicksand-semibold">
                      Safety First:
                    </span>{" "}
                    Every place is checked by our team.
                  </li>
                  <li>
                    <span className="font-semibold quicksand-semibold">
                      Fun Guaranteed:
                    </span>{" "}
                    We only list the most awesome spots.
                  </li>
                  <li>
                    <span className="font-semibold quicksand-semibold">
                      Easy Peasy:
                    </span>{" "}
                    Booking is as easy as 1-2-3!
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-8">
              <Users className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 quicksand-bold">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto quicksand-regular">
                We are a team of parents, adventurers, and big kids at heart,
                dedicated to finding the best places for your family to play.
              </p>
            </div>

            <div className="text-center pt-8">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 quicksand-bold">
                Join Our Adventure!
              </h2>
              <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto quicksand-regular">
                Ready to explore? Let's find your next favorite playzone!
              </p>
              <Button
                onClick={() => (window.location.href = "/listings")}
                className="mt-6 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all quicksand-bold"
              >
                Find a Playzone
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
