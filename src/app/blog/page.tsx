"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "magic-of-play",
    title: "The Magic of Play: How Playhouses Boost Imagination",
    description:
      "Dive into the world of imagination and discover how our playhouses can be the secret ingredient to your child's creative adventures.",
    image: "/fun_beano_hero_home.png",
  },
  {
    id: "safety-first",
    title: "Safety First! Our Commitment to Safe Play",
    description:
      "Your child's safety is our top priority. Learn about the materials and design choices that make our playhouses super safe and fun.",
    image: "/safetyMainFox.png",
  },
  {
    id: "diy-decorations",
    title: "DIY Playhouse Decorations: A Family Fun Project",
    description:
      "Get your creative juices flowing! Here are some fun and easy DIY ideas to decorate your playhouse with your little ones.",
    image: "/TestinomialFoxImage.png",
  },
  {
    id: "best-games",
    title: "The Best Games to Play in Your Playhouse",
    description:
      "From tea parties to space missions, we've compiled a list of the most exciting games to play in your new playhouse.",
    image: "/FoxImageAboveSafety.png",
  },
  {
    id: "safety-guidelines",
    title: "Safety Guidelines",
    description:
      "A comprehensive guide to ensuring a safe and enjoyable playtime for your children, both at home and in our playzones.",
    image: "/SafetyHome1.png",
  },
  {
    id: "health-hygiene",
    title: "Health & Hygiene",
    description:
      "Learn about our strict hygiene protocols and get tips for keeping your little ones healthy during play.",
    image: "/SafetyHome3.png",
  },
  {
    id: "parenting-tips",
    title: "Parenting Tips",
    description:
      "Expert advice and helpful tips for modern parents, from managing screen time to encouraging social skills.",
    image: "/SafetyHome2.png",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-2 sunny-spells sm:text-7xl bg-gradient-to-b from-orange-500 to-red-500 text-transparent bg-clip-text ">
            Funbeano&apos;s Fun-tastic Blog
          </h1>
          <p className="text-lg text-gray-600">
            Adventures, tips, and tricks for endless fun!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              id={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 scroll-mt-24"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={`/blog#${post.id}`}
                  className="inline-flex items-center text-orange-500 font-semibold"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
