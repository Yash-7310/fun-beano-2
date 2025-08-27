"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import {
  MapPin,
  Star,
  Users,
  Shield,
  Heart,
  Trophy,
  Clock,
  CheckCircle,
  BookOpen,
  Zap,
  MoveRight,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/HeroSection";
import PopularCities from "@/components/PopularCities";
import AboutNumerics from "@/components/AboutNumerics";
import { useWishlist } from "@/context/WishlistContext";

interface HomeProps {
  onNavigate: (page: any, data?: any) => void;
}

const cities = [
  {
    name: "Delhi",
    count: 45,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=250&fit=crop",
    color: "bg-vibrant-red",
  },
  {
    name: "Gurugram",
    count: 32,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop",
    color: "bg-vibrant-blue",
  },
  {
    name: "Mumbai",
    count: 58,
    image:
      "https://images.unsplash.com/photo-1595659074961-d2d62fd7d5b0?w=400&h=250&fit=crop",
    color: "bg-vibrant-green",
  },
  {
    name: "Bangalore",
    count: 41,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    color: "bg-vibrant-purple",
  },
  {
    name: "Chennai",
    count: 29,
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=250&fit=crop",
    color: "bg-vibrant-orange",
  },
  {
    name: "Hyderabad",
    count: 35,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    color: "bg-vibrant-pink",
  },
];

const featuredPlayhouses = [
  {
    id: 1,
    name: "Little Einsteins Learning Center",
    location: "Connaught Place, Delhi",
    rating: 4.9,
    price: 599,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
    liveViewers: 23,
    features: ["STEM Learning", "Safe Environment", "Certified Staff"],
    ageRange: "2-12",
    special: "Parent Favorite",
    learningBenefits: ["Problem Solving", "Creative Thinking", "Social Skills"],
    city: "Delhi",
    distance: 0,
  },
  {
    id: 2,
    name: "Happy Hearts Playhouse",
    location: "Cyber Hub, Gurugram",
    rating: 4.8,
    price: 449,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
    liveViewers: 18,
    features: ["Emotional Learning", "Parent Lounge", "Healthy Snacks"],
    ageRange: "1-10",
    special: "Safety Certified",
    learningBenefits: ["Emotional Intelligence", "Communication", "Confidence"],
    city: "Gurugram",
    distance: 0,
  },
  {
    id: 3,
    name: "Adventure Academy Kids",
    location: "Powai, Mumbai",
    rating: 4.9,
    price: 699,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop",
    liveViewers: 31,
    features: ["Physical Development", "24/7 Security", "Parent App"],
    ageRange: "3-15",
    special: "Educational Excellence",
    learningBenefits: ["Motor Skills", "Teamwork", "Leadership"],
    city: "Mumbai",
    distance: 0,
  },
];

const parentTestimonials = [
  {
    id: 1,
    parent: "Priya Sharma",
    child: "Aarav (5 years)",
    role: "Working Mother",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    childImage:
      "https://images.unsplash.com/photo-1544717298-318bd8d0cf1b?w=100&h=100&fit=crop&crop=face",
    quote:
      "I was hesitant to leave Aarav anywhere, but seeing him laugh and learn here gives me such peace of mind. The staff treats him like family, and I can see his confidence growing every day.",
    beforeAfter: {
      before: "Shy and clingy",
      after: "Confident and social",
    },
    location: "Delhi",
    videoTestimonial: true,
  },
  {
    id: 2,
    parent: "Rajesh Kumar",
    child: "Ananya (7 years)",
    role: "Father & Engineer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    childImage:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=100&h=100&fit=crop&crop=face",
    quote:
      "As a father, safety is my biggest concern. The live cameras, certified staff, and safety protocols here exceed my expectations. Ananya has learned so much and made wonderful friends.",
    beforeAfter: {
      before: "Struggled with sharing",
      after: "Loves teamwork and helping others",
    },
    location: "Mumbai",
    videoTestimonial: false,
  },
  {
    id: 3,
    parent: "Dr. Meera Patel",
    child: "Arjun (4 years)",
    role: "Pediatrician & Mom",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    childImage:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    quote:
      "As a pediatrician, I'm very particular about hygiene and safety. This place maintains hospital-level cleanliness while being incredibly fun. Arjun's language skills have improved tremendously.",
    beforeAfter: {
      before: "Limited vocabulary",
      after: "Speaks in full sentences",
    },
    location: "Bangalore",
    videoTestimonial: true,
  },
];

const learningOutcomes = [
  {
    icon: BookOpen,
    title: "Academic Readiness",
    description:
      "Children develop pre-literacy and numeracy skills through play-based learning",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop",
    stats: "89% improvement in school readiness scores",
  },
  {
    icon: Users,
    title: "Social Development",
    description:
      "Kids learn to share, cooperate, and build meaningful friendships",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=200&fit=crop",
    stats: "94% of children show improved social skills",
  },
  {
    icon: Zap,
    title: "Emotional Growth",
    description:
      "Children develop emotional intelligence and self-regulation skills",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
    stats: "92% reduction in emotional outbursts",
  },
  {
    icon: Trophy,
    title: "Physical Development",
    description:
      "Safe, supervised activities build strength, coordination, and motor skills",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=200&fit=crop",
    stats: "85% improvement in physical milestones",
  },
];

const safetyFeatures = [
  {
    icon: Shield,
    title: "Background-Checked Staff",
    description:
      "Every team member undergoes thorough background verification and child safety training",
    image: "/SafetyHome1.png",
  },
  {
    icon: Heart,
    title: "Live Parent App",
    description:
      "Watch your child play in real-time through our secure parent monitoring app",
    image: "/SafetyHome2.png",
  },
  {
    icon: CheckCircle,
    title: "Medical-Grade Hygiene",
    description:
      "All equipment sanitized hourly using child-safe, medical-grade cleaning protocols",
    image: "/SafetyHome3.png",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    description:
      "On-site trained first aid responders and direct line to pediatric emergency services",
    image: "/SafetyHome4.png",
  },
];

const happyMoments = [
  {
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    caption: "Building castles and confidence together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    caption: "Learning through laughter and play",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    caption: "Making friends that last a lifetime",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
    caption: "Safe adventures in every corner",
  },
];

export default function Home() {
  const router = useRouter();
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Popular cities section */}
      <PopularCities />

      {/* Parent Testimonials - More Emotional */}
      <section className="mt-8 sm:mt-24 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex items-center justify-center flex-col">
            {/* <Heart className="w-16 h-16 text-secondary mx-auto mb-6" /> */}
            <img
              src="/TestinomialFoxImage.png"
              alt="testimonial fox image"
              className="w-[300] h-auto"
            />
            <h2 className="text-3xl mb-6 quicksand-bold text-[#FF0000]">
              Real Stories from Real Parents
            </h2>
            <p className="text-base text-warm-gray max-w-4xl mx-auto quicksand-bold ">
              See how our playhouses have transformed children's lives and given
              parents the confidence they need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-2 border-green-500 hover:shadow-md overflow-hidden"
                onMouseEnter={() => setHoveredTestimonial(index)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                <CardContent className="p-8">
                  {/* Parent and Child Photos */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.parent}
                        className="w-16 h-16 rounded-full border-3  border-2 border-[#FED7A5]"
                      />
                      <div>
                        <h4 className="font-bold text-xl text-charcoal quicksand-bold">
                          {testimonial.parent}
                        </h4>
                        <p className="text-warm-gray text-sm quicksand-medium">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-primary fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Child's Name and Transformation */}
                  <div className="mb-6">
                    <div className="text-lg font-bold text-charcoal mb-3 quicksand-bold">
                      {testimonial.child}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-charcoal text-sm leading-relaxed mb-4 mt-24 quicksand-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Location and Video Badge */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-primary rounded-full text-xs text-primary quicksand-bold"
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </Badge>
                    {testimonial.videoTestimonial && (
                      <Badge className="bg-secondary rounded-full text-white quicksand-bold text-xs">
                        Video Story Available
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button
              className="hover:scale-105 text-black py-6 w-full max-w-sm flex justify-around mx-auto rounded-full text-base bg-primary quicksand-bold"
              onClick={() => router.push("/listings")}
            >
              Start Your Child's Journey Today
              <MoveRight size={48} />
            </Button>
          </div>
        </div>
      </section>

      {/* fox image just above safety block */}
      <div className="bg-white">
        <img
          src="/FoxImageAboveSafety.png"
          alt="fox image"
          className="w-[100] sm:w-[200] h-auto ml-[60%] sm:ml-[80%]"
        />
      </div>

      {/* Safety First - Enhanced */}
      <section className="py-20 bg-[#FF8000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src="/safetyMainFox.png"
              alt="fox image"
              className="mx-auto w-[250] h-auto"
            />
            <h2 className="text-3xl mb-4 quicksand-bold text-white">
              Safety Isn't Just a Promise - It's Our Guarantee
            </h2>
            <p className="text-base mx-auto quicksand-bold text-white">
              As a parent, you need to know your child is safe. Here's exactly
              how we ensure it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-2 border-vibrant-green/30 overflow-hidden"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl text-left quicksand-bold mb-3 text-charcoal">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal text-left quicksand-medium text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Playhouses - Parent-Focused */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <Trophy className="w-16 h-16 text-primary mx-auto mb-6" /> */}
            <img
              src="/Funbeano-logo-3.png"
              alt="fun beano image with chain"
              className="w-[300] h-auto mx-auto"
            />
            <h2 className="text-3xl mb-4 quicksand-bold text-green-500">
              Beno Approved Playzones
            </h2>
            <p className="text-base quicksand-bold">
              These playhouses have earned the highest trust scores from parents
              like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredPlayhouses.map((playhouse, index) => (
              <Card
                key={playhouse.id}
                className="cursor-pointer hover:shadow-playful transition-all transform hover:scale-105 overflow-hidden border-2 border-green-500 rounded-3xl"
                onClick={() => router.push(`/playhouse/${playhouse.id}`)}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={playhouse.image}
                    alt={playhouse.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute pl-12 top-4 left-28 bg-secondary text-white px-4 py-3 rounded-full  flex items-center shadow-lg">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="quicksand-bold text-xs text-white">
                      {playhouse.liveViewers} Live
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-charcoal px-4 py-2 rounded-full ">
                    <span className="quicksand-bold text-xs">
                      Parents Favourite
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 text-charcoal px-4 py-2 rounded-2xl ">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isInWishlist(playhouse.id)) {
                          removeFromWishlist(playhouse.id);
                        } else {
                          console.log(playhouse);
                          addToWishlist({
                            id: playhouse.id,
                            name: playhouse.name,
                            location: playhouse.location,
                            city: playhouse.city,
                            rating: playhouse.rating,
                            price: playhouse.price,
                            image: playhouse.image,
                            liveViewers: playhouse.liveViewers,
                            features: playhouse.features,
                            ageRange: playhouse.ageRange,
                            distance: playhouse.distance,
                          });
                        }
                      }}
                    >
                      <Heart
                        className={`w-4 h-4  ${
                          isInWishlist(playhouse.id)
                            ? "text-white fill-current"
                            : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <CardTitle className="flex items-center justify-between text-2xl quicksand-bold">
                    {playhouse.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-warm-gray text-base quicksand-medium">
                    <MapPin className="w-5 h-5 mr-2" />
                    {playhouse.location}
                  </CardDescription>
                  <div className="text-[#9C27B0] quicksand-bold mt-4 ">
                    Perfect for ages {playhouse.ageRange}
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  {/* Learning Benefits */}
                  <div className="mb-4">
                    <h4 className="text-base text-charcoal quicksand-bold mb-2">
                      Your Child Will Learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {playhouse.learningBenefits.map((benefit) => (
                        <Badge
                          key={benefit}
                          className="bg-[#E7F6FE] border border-[#45C6FF] text-charcoal rounded-full text-[10] quicksand-semibold"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Safety Features */}
                  <div className="mb-6">
                    <h4 className=" text-base quicksand-bold text-charcoal mb-2">
                      Safety Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {playhouse.features.map((feature) => (
                        <Badge
                          key={feature}
                          className="bg-green-50 border border-green-500 text-charcoal text-[10] rounded-full"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className=" flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-primary">
                        ₹{playhouse.price}
                      </span>
                      <span className="text-warm-gray ml-2 quicksand-semibold">
                        / child
                      </span>
                    </div>
                    <Button className="bg-transparent hover:scale-105 text-charcoal text-base px-6 py-3 quicksand-bold ">
                      Visit & Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="hover:scale-105 text-black py-6 w-full max-w-sm flex justify-around mx-auto rounded-full text-base bg-primary quicksand-bold"
              onClick={() => router.push("/listings")}
            >
              Explore All trusted Playhouses
              <MoveRight strokeWidth={2} />
            </Button>
          </div>
        </div>
      </section>

      {/* About data in numerics */}
      <AboutNumerics />

      <div className="h-28 bg-white" />
    </div>
  );
}
