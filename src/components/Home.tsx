import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Star,
  Users,
  ArrowRight,
  Search,
  Calendar,
  Gift,
  Shield,
  Heart,
  Sparkles,
  Trophy,
  Clock,
  Baby,
  User,
  Gamepad2,
  Phone,
  Mail,
  CheckCircle,
  BookOpen,
  Smile,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";
import { useRouter } from "next/navigation";

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
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=250&h=200&fit=crop",
  },
  {
    icon: Heart,
    title: "Live Parent App",
    description:
      "Watch your child play in real-time through our secure parent monitoring app",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=250&h=200&fit=crop",
  },
  {
    icon: CheckCircle,
    title: "Medical-Grade Hygiene",
    description:
      "All equipment sanitized hourly using child-safe, medical-grade cleaning protocols",
    image:
      "https://images.unsplash.com/photo-1584515933488-541a7bb95a99?w=250&h=200&fit=crop",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    description:
      "On-site trained first aid responders and direct line to pediatric emergency services",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=250&h=200&fit=crop",
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

export function Home() {
  const router = useRouter();
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );

  return (
    <div className="min-h-screen">
      {/* Emotionally Engaging Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary min-h-screen flex items-center">
        {/* Floating elements with purpose */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-24 h-24 bg-mint-green/20 rounded-full animate-float-slow flex items-center justify-center">
            <Heart className="w-12 h-12 text-mint-green" />
          </div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-sky-blue/30 rounded-full animate-float-fast flex items-center justify-center">
            <Shield className="w-10 h-10 text-sky-blue" />
          </div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle flex items-center justify-center">
            <Smile className="w-8 h-8 text-secondary" />
          </div>
          <div className="absolute top-60 right-40 w-28 h-28 bg-vibrant-purple/20 rounded-full animate-pulse-slow flex items-center justify-center">
            <BookOpen className="w-14 h-14 text-vibrant-purple" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Emotional Copy */}
            <div className="text-left">
              <div className="mb-8">
                <Badge className="bg-white/20 text-charcoal font-bold px-6 py-3 text-lg rounded-full border-2 border-white/30 mb-6">
                  Trusted by 10,000+ Parents
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-8 leading-tight">
                Your Child's
                <span className="block text-6xl md:text-8xl bg-gradient-to-r from-secondary to-vibrant-purple bg-clip-text text-transparent">
                  Safety, Learning
                </span>
                <span className="block text-5xl md:text-7xl">& Happiness</span>
                <span className="block text-4xl md:text-6xl text-charcoal/80">
                  Come First
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-charcoal/80 mb-8 leading-relaxed font-medium">
                Give your child the gift of safe learning, joyful play, and
                lifelong friendships. Every playhouse is background-checked,
                safety-certified, and designed for your peace of mind.
              </p>

              {/* Parent Reassurance Points */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-vibrant-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-charcoal">
                    Live cameras so you can watch your child play
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-vibrant-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-charcoal">
                    All staff background-checked & child development certified
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-vibrant-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-charcoal">
                    Educational activities designed by child psychologists
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-white text-charcoal hover:bg-white/90 text-xl px-12 py-6 rounded-full shadow-playful transform hover:scale-105 transition-all font-bold"
                  onClick={() => router.push("/listings")}
                >
                  <Search className="w-7 h-7 mr-3" />
                  Find Safe Playhouses Near You
                </Button>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white text-xl px-8 py-6 rounded-full shadow-lg font-bold border-2 border-white/30"
                  onClick={() => router.push("/create")}
                >
                  <Shield className="w-7 h-7 mr-3" />
                  List Your Certified Playhouse
                </Button>
              </div>
            </div>

            {/* Right Column - Happy Family Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative rounded-3xl overflow-hidden shadow-playful">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=400&fit=crop"
                      alt="Happy children playing safely"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-charcoal">
                        Safe & Happy
                      </span>
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-playful">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop"
                      alt="Children learning through play"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-charcoal">
                        Learning Together
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative rounded-3xl overflow-hidden shadow-playful">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop"
                      alt="Smiling parent watching child"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-charcoal">
                        Parent Peace of Mind
                      </span>
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden shadow-playful">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=400&fit=crop"
                      alt="Children making friends"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-bold text-charcoal">
                        Lifelong Friendships
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-playful animate-float-slow">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-warm-gray">Parent Rating</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-playful animate-float-fast">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-warm-gray">Safety Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials - More Emotional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-vibrant-pink bg-clip-text text-transparent">
              Real Stories from Real Parents
            </h2>
            <p className="text-2xl text-warm-gray max-w-3xl mx-auto">
              See how our playhouses have transformed children's lives and given
              parents the confidence they need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-3 border-mint-green/30 overflow-hidden"
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
                        className="w-16 h-16 rounded-full border-3 border-primary"
                      />
                      <div>
                        <h4 className="font-bold text-lg text-charcoal">
                          {testimonial.parent}
                        </h4>
                        <p className="text-warm-gray">{testimonial.role}</p>
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
                    <ImageWithFallback
                      src={testimonial.childImage}
                      alt={testimonial.child}
                      className="w-14 h-14 rounded-full border-2 border-sky-blue"
                    />
                  </div>

                  {/* Child's Name and Transformation */}
                  <div className="mb-6">
                    <div className="text-lg font-bold text-charcoal mb-3">
                      {testimonial.child}
                    </div>
                    <div className="bg-gradient-secondary rounded-2xl p-4 text-white">
                      <div className="text-sm font-medium mb-2">
                        Amazing Transformation:
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="opacity-80">Before: </span>
                          <span>{testimonial.beforeAfter.before}</span>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                        <div>
                          <span className="opacity-80">After: </span>
                          <span className="font-bold">
                            {testimonial.beforeAfter.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-charcoal text-lg italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Location and Video Badge */}
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-primary text-primary"
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </Badge>
                    {testimonial.videoTestimonial && (
                      <Badge className="bg-secondary text-white">
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
            <p className="text-xl text-warm-gray mb-6">
              Want to share your child's transformation story?
            </p>
            <Button
              className="bg-gradient-primary hover:scale-105 text-charcoal font-bold px-8 py-4 rounded-full text-lg"
              onClick={() => router.push("/listings")}
            >
              Start Your Child's Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gradient-to-br from-sky-blue/10 to-mint-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-vibrant-purple mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-vibrant-purple to-vibrant-blue bg-clip-text text-transparent">
              Your Child Will Learn & Grow
            </h2>
            <p className="text-2xl text-warm-gray max-w-3xl mx-auto">
              Every activity is designed by child development experts to nurture
              your child's potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningOutcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-3 border-sky-blue/30 overflow-hidden"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={outcome.image}
                      alt={outcome.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-vibrant-purple" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-charcoal">
                      {outcome.title}
                    </h3>
                    <p className="text-warm-gray mb-4 leading-relaxed">
                      {outcome.description}
                    </p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <div className="text-sm font-bold text-primary">
                        {outcome.stats}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety First - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-vibrant-green mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-vibrant-green to-vibrant-blue bg-clip-text text-transparent">
              Safety Isn't Just a Promise - It's Our Guarantee
            </h2>
            <p className="text-2xl text-warm-gray max-w-3xl mx-auto">
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
                  className="text-center hover:shadow-playful transition-all transform hover:scale-105 rounded-3xl border-3 border-vibrant-green/30 overflow-hidden"
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-vibrant-green" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-charcoal">
                      {feature.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Safety Guarantee */}
          <div className="mt-16 bg-gradient-secondary rounded-3xl p-12 text-center text-white">
            <Shield className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Our Safety Guarantee to You
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If you're not completely satisfied with our safety standards,
              we'll refund your visit and help you find a better option. That's
              how confident we are in our commitment to your child's wellbeing.
            </p>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-bold px-8 py-4 rounded-full text-lg"
              onClick={() => router.push("/listings")}
            >
              Experience Our Safety Promise
            </Button>
          </div>
        </div>
      </section>

      {/* Happy Moments Gallery */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Smile className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Moments That Make Your Heart Smile
            </h2>
            <p className="text-2xl text-warm-gray">
              These are the memories your child will treasure forever
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {happyMoments.map((moment, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden shadow-playful hover:scale-105 transition-transform group"
              >
                <ImageWithFallback
                  src={moment.image}
                  alt={moment.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-medium text-lg leading-relaxed">
                      {moment.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playhouses - Parent-Focused */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Parent-Approved Playhouses
            </h2>
            <p className="text-2xl text-warm-gray">
              These playhouses have earned the highest trust scores from parents
              like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredPlayhouses.map((playhouse, index) => (
              <Card
                key={playhouse.id}
                className="cursor-pointer hover:shadow-playful transition-all transform hover:scale-105 overflow-hidden border-3 border-mint-green/30 rounded-3xl"
                onClick={() => router.push("/playhouse-detail", { playhouse })}
              >
                <div className="relative">
                  <ImageWithFallback
                    src={playhouse.image}
                    alt={playhouse.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm flex items-center font-bold shadow-lg">
                    <Users className="w-4 h-4 mr-1" />
                    {playhouse.liveViewers} Parents Watching Live
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-charcoal px-4 py-2 rounded-full text-sm font-bold">
                    {playhouse.special}
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="flex items-center justify-between text-xl">
                    {playhouse.name}
                    <div className="flex items-center bg-primary/20 px-3 py-1 rounded-full">
                      <Star className="w-5 h-5 text-primary mr-1" />
                      <span className="font-bold text-charcoal">
                        {playhouse.rating}
                      </span>
                    </div>
                  </CardTitle>
                  <CardDescription className="flex items-center text-warm-gray text-lg">
                    <MapPin className="w-5 h-5 mr-2" />
                    {playhouse.location}
                  </CardDescription>
                  <div className="text-vibrant-purple font-bold">
                    Perfect for ages {playhouse.ageRange}
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  {/* Learning Benefits */}
                  <div className="mb-4">
                    <h4 className="font-bold text-sm text-charcoal mb-2">
                      Your Child Will Learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {playhouse.learningBenefits.map((benefit) => (
                        <Badge
                          key={benefit}
                          className="bg-sky-blue/20 text-charcoal border-sky-blue text-xs"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Safety Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-charcoal mb-2">
                      Safety Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {playhouse.features.map((feature) => (
                        <Badge
                          key={feature}
                          className="bg-mint-green/20 text-charcoal border-mint-green text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-primary">
                        ₹{playhouse.price}
                      </span>
                      <span className="text-warm-gray ml-2">per child</span>
                    </div>
                    <Button className="bg-gradient-primary hover:scale-105 text-charcoal font-bold px-6 py-3 rounded-full">
                      Visit & Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => router.push("/listings")}
              className="bg-gradient-secondary hover:scale-105 text-white text-xl px-12 py-6 rounded-full font-bold shadow-playful"
            >
              Explore All Trusted Playhouses
              <ArrowRight className="w-7 h-7 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Emotional Connection */}
      <section className="py-20 bg-gradient-primary text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="w-20 h-20 mx-auto animate-pulse-slow" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Ready to See Your Child Thrive?
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Join thousands of parents who've discovered the joy of watching
            their children learn, grow, and shine in a safe, nurturing
            environment. Your child's happiest memories start here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              onClick={() => router.push("/listings")}
              className="bg-white text-charcoal hover:bg-white/90 hover:scale-105 text-xl px-12 py-6 rounded-full font-bold shadow-playful"
            >
              <Search className="w-7 h-7 mr-3" />
              Find Your Perfect Playhouse
            </Button>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white hover:scale-105 text-xl px-8 py-6 rounded-full font-bold border-2 border-white/30"
            >
              <Shield className="w-7 h-7 mr-3" />
              Learn About Our Safety Standards
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">10,000+</div>
              <div className="text-lg text-charcoal/80">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-lg text-charcoal/80">Safety Verified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4.9★</div>
              <div className="text-lg text-charcoal/80">Parent Rating</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
