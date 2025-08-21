import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Shield,
  Award,
  Clock,
  Star,
  Home,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Send className="w-16 h-16 text-charcoal mx-auto animate-bounce-gentle" />
          </div>
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Join the Fun Squad!
          </h2>
          <p className="text-2xl text-charcoal/80 mb-10 max-w-3xl mx-auto font-medium">
            Get weekly updates on new playhouses, special offers, and exclusive
            events for your little adventurers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 border-2 border-white text-charcoal placeholder:text-warm-gray text-lg py-4 rounded-full"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full text-lg font-bold">
              <Send className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Home className="w-8 h-8 text-charcoal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">PlayhouseHub</h3>
                  <p className="text-lg text-mint-green">Where Fun Begins</p>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                India's most trusted platform for discovering amazing playhouses
                and creating unforgettable memories for your children.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-lg">hello@playhousehub.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg">New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-primary">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Browse Playhouses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Book a Visit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Birthday Parties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Group Bookings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Gift Vouchers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors text-lg hover:underline"
                  >
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            {/* For Parents */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-secondary">
                For Parents
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    Age Recommendations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    Health & Hygiene
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    Parenting Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-secondary transition-colors text-lg hover:underline"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-mint-green">
                For Businesses
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    List Your Playhouse
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    Partner Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    Marketing Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-mint-green transition-colors text-lg hover:underline"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-16 bg-warm-gray" />

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h5 className="text-xl font-bold mb-3">100% Safe</h5>
              <p className="text-white/70 text-lg">
                All our partners are verified for safety standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h5 className="text-xl font-bold mb-3">Quality Assured</h5>
              <p className="text-white/70 text-lg">
                Premium playhouses with excellent ratings
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-sky-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-sky-blue" />
              </div>
              <h5 className="text-xl font-bold mb-3">24/7 Support</h5>
              <p className="text-white/70 text-lg">
                Always here to help with bookings and queries
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-mint-green" />
              </div>
              <h5 className="text-xl font-bold mb-3">Trusted by 10k+</h5>
              <p className="text-white/70 text-lg">
                Families across India trust our platform
              </p>
            </div>
          </div>

          <Separator className="my-12 bg-warm-gray" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-white/70 text-lg">
                © 2024 PlayhouseHub. Made with{" "}
                <Heart className="w-5 h-5 text-secondary inline mx-1" /> for
                kids
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-lg"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-lg"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-primary transition-colors text-lg"
              >
                Cookie Policy
              </a>
            </div>

            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-primary/20 hover:bg-primary/30 text-primary border-none"
              >
                <Facebook className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                className="bg-secondary/20 hover:bg-secondary/30 text-secondary border-none"
              >
                <Instagram className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                className="bg-sky-blue/20 hover:bg-sky-blue/30 text-sky-blue border-none"
              >
                <Twitter className="w-6 h-6" />
              </Button>
              <Button
                size="sm"
                className="bg-mint-green/20 hover:bg-mint-green/30 text-mint-green border-none"
              >
                <Youtube className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
