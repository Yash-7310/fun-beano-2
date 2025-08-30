"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import { Sparkles, Rocket, Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50">
      <div className="container mx-auto px-4 py-10 sm:pb-24 pt-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl">🚀</h1>
          <h1 className="text-xl mt-4 sm:text-4xl font-bold mb-4 bg-gradient-to-b from-orange-500 to-red-500 bg-clip-text text-transparent quicksand-bold">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto quicksand-medium">
            Fun Beano was born from a simple idea: to make every child&apos;s
            day an adventure!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg border-2 border-red-100">
          <div className="space-y-8">
            <div className="text-center">
              <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 quicksand-bold text-secondary">
                You make it - <span className="text-orange-400">Fun Beano</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              Beano welcomes all exemplary parents to the mesmerising world of
              Beano where he makes your precious child&apos;s parties{" "}
              <span className="text-primary quicksand-bold">OUT</span>{" "}
              <span className="text-secondary quicksand-bold">OF</span>{" "}
              <span className="text-green-500 quicksand-bold">THIS</span>{" "}
              <span className="text-orange-500 quicksand-bold">WORLD</span> with
              a mega sach full of fantabulous memories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              <span className="text-secondary quicksand-bold">WELCOME</span> to{" "}
              <span className="text-primary quicksand-bold">FUN BEANO</span> -
              We are a unique platform specially tailored for all children and
              parents because we understand that every child&apos;s fiesta is
              unique and finding the precise venue to host it can be
              overwhelming.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              Here we eradicate the hassle of visiting and calling numerous
              playhouses, just visit{" "}
              <span className="text-primary quicksand-bold">FUN BEANO</span>{" "}
              {"("}on your phone{")"}, select your location, date and time and{" "}
              <span className="text-green-500 quicksand-bold">VOILA!</span> in a
              click, all beautiful playzones are right there in front of you.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              At <span className="text-primary quicksand-bold">FUN BEANO</span>{" "}
              you can view detailed information, compare playzones,{" "}
              <span className="text-secondary quicksand-bold">
                check + compare
              </span>{" "}
              packages and read reviews all in one place.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              Whether you are planning a birthday party, a get together, a fun
              weekend outing, kitty party or just looking for a{" "}
              <span className="text-secondary quicksand-bold">
                safe + exciting
              </span>{" "}
              space for your kid,{" "}
              <span className="text-primary quicksand-bold">FUN BEANO </span>{" "}
              helps you make the right decision quickly and effortlessly.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              We are not just a booking platform - we are a committed and
              invested partner for parents and a progression center for
              playzones.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center quicksand-regular">
              By connecting families with venues that fit their need we ensure
              kids have unforgettable experience while playzones enjoy greater
              visibility and more bookings.
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
              <div className=" bg-yellow-50 p-6 rounded-xl">
                <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl text-center font-bold text-gray-800 quicksand-bold">
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
                Ready to explore? Let&apos;s find your next favorite playzone!
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
