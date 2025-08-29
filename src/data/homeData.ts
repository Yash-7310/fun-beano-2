import { BookOpen, Users, Zap, Trophy, Shield, Heart, CheckCircle, Clock } from "lucide-react";

export const featuredPlayhouses = [
  {
    id: 1,
    name: "Little Einsteins Learning Center",
    location: "Connaught Place, Delhi",
    rating: 4.9,
    price: 599,
    image:
      "/playzones/1.jpg",
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
      "/playzones/2.jpg",
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
      "/playzones/3.jpg",
    liveViewers: 31,
    features: ["Physical Development", "24/7 Security", "Parent App"],
    ageRange: "3-15",
    special: "Educational Excellence",
    learningBenefits: ["Motor Skills", "Teamwork", "Leadership"],
    city: "Mumbai",
    distance: 0,
  },
];

export const parentTestimonials = [
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
      "As a pediatrician, I&apos;m very particular about hygiene and safety. This place maintains hospital-level cleanliness while being incredibly fun. Arjun&apos;s language skills have improved tremendously.",
    beforeAfter: {
      before: "Limited vocabulary",
      after: "Speaks in full sentences",
    },
    location: "Bangalore",
    videoTestimonial: true,
  },
];

export const learningOutcomes = [
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

export const safetyFeatures = [
  {
    icon: Shield,
    title: "Background Checked Staff",
    description:
      "Every team member undergoes thorough background verification and child safety training",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=250&h=200&fit=crop",
  },
  {
    icon: Heart,
    title: "Live Parent Viewing",
    description:
      "Watch your child play in real-time through our secure parent monitoring app",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=250&h=200&fit=crop",
  },
  {
    icon: CheckCircle,
    title: "Sanitary and Pharmacutical grade Hygiene Standard",
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

export const happyMoments = [
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