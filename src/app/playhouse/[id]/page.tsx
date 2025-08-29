"use client";

import React, { useState, use } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Separator } from "../../../components/ui/separator";
import {
  MapPin,
  Star,
  Users,
  Clock,
  Phone,
  Calendar,
  Heart,
  Camera,
  Plus,
} from "lucide-react";
// import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { allPlayhouses } from "../../listings/page";
import { Playhouse, useCompare } from "../../../context/CompareContext";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
interface PlayhouseDetailProps {
  // onNavigate: (page: any, data?: any) => void;
  params: Promise<{ id: string }>;
}

const gallery = [
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop",
];

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    date: "2 days ago",
    comment:
      "Amazing place for kids! My daughter had a blast. Clean facilities and friendly staff.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    rating: 4,
    date: "1 week ago",
    comment:
      "Good variety of activities. Pricing is reasonable. Will definitely visit again.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Anita Gupta",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Perfect for birthday parties! The staff helped organize everything beautifully.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
];

export default function PlayhouseDetail({ params }: PlayhouseDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const { addToCompare, isInCompare } = useCompare();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // FIX: Unwrap the &apos;params&apos; Promise using the React.use() hook.
  const resolvedParams = use(params);
  // FIX: Convert the &apos;id&apos; from a string (from the URL) to a number for comparison.
  const id = Number(resolvedParams.id);

  const playhouse = allPlayhouses.find((item: Playhouse) => item.id === id);

  if (!playhouse) {
    return <div>Playhouse not found</div>;
  }

  const handleCompare = () => {
    if (!isInCompare(playhouse.id)) {
      addToCompare(playhouse);
    }
    router.push("/compare");
  };

  // Handle case where playhouse is not found
  if (!playhouse) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Playhouse not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2 quicksand-bold">
                {playhouse.name}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 quicksand-medium">
                <div className="flex items-center text-xs md:text-lg">
                  <MapPin className="w-4 h-4 mr-1" />
                  {playhouse.location}
                </div>
                <div className="flex items-center text-xs md:text-lg">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  {playhouse.rating} (245 reviews)
                </div>
                <div className="flex items-center text-red-500 text-xs md:text-lg">
                  <Users className="w-4 h-4 mr-1" />
                  {playhouse.liveViewers} people viewing
                </div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex items-center space-x-2">
              {/* <Button
                variant="outline"
                size="sm"
                className="quicksand-semibold"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button> */}
              <Button
                variant={isInWishlist(playhouse.id) ? "secondary" : "outline"}
                size="sm"
                className="quicksand-semibold"
                onClick={(e) => {
                  e.stopPropagation;
                  if (isInWishlist(playhouse.id)) {
                    removeFromWishlist(playhouse.id);
                  } else {
                    addToWishlist(playhouse);
                  }
                }}
              >
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleCompare}
                className="quicksand-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Compare
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    width={500}
                    height={0}
                    src={gallery[selectedImage]}
                    alt={playhouse.name}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Camera className="w-4 h-4 mr-1" />
                    {selectedImage + 1} / {gallery.length}
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {gallery.map((image, index) => (
                      <Image
                        width={500}
                        height={0}
                        key={index}
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className={`w-full h-20 object-cover rounded cursor-pointer transition-all ${
                          selectedImage === index
                            ? "ring-2 ring-primary ring-offset-2"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details */}
            <Tabs defaultValue="overview" className="w-full quicksand-regular">
              <TabsList className="grid w-full grid-cols-4 quicksand-semibold">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="quicksand-bold">
                      About This Playhouse
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 quicksand-regular">
                      {playhouse.name} is a premium children&apos;s play area
                      designed to provide a safe, fun, and engaging environment
                      for kids of all ages. Our facility features
                      state-of-the-art play equipment, interactive games, and
                      dedicated areas for different age groups.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 quicksand-semibold">
                          Age Range
                        </h4>
                        <p className="text-gray-600 quicksand-regular">
                          {playhouse.ageRange}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 quicksand-semibold">
                          Operating Hours
                        </h4>
                        <p className="text-gray-600 quicksand-regular">
                          10:00 AM - 8:00 PM (Daily)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 quicksand-semibold">
                          Safety Features
                        </h4>
                        <p className="text-gray-600 quicksand-regular">
                          CCTV Monitoring, First Aid, Trained Staff
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 quicksand-semibold">
                          Parking
                        </h4>
                        <p className="text-gray-600 quicksand-regular">
                          Free parking available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facilities" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="quicksand-bold">
                      Facilities &amp; Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 quicksand-semibold">
                          Play Areas
                        </h4>
                        <ul className="space-y-2 text-gray-600 list-disc list-inside quicksand-regular">
                          <li>Soft play area for toddlers</li>
                          <li>Multi-level play structure</li>
                          <li>Ball pit with over 10,000 balls</li>
                          <li>Climbing walls and slides</li>
                          <li>Interactive gaming zone</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 quicksand-semibold">
                          Additional Services
                        </h4>
                        <ul className="space-y-2 text-gray-600 list-disc list-inside quicksand-regular">
                          <li>Birthday party packages</li>
                          <li>Parent seating area</li>
                          <li>Café with healthy snacks</li>
                          <li>Event hosting facilities</li>
                          <li>Lockers and storage</li>
                        </ul>
                      </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-wrap gap-2">
                      {playhouse.features.map((feature: string) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-sm quicksand-medium"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="quicksand-bold">
                      Customer Reviews
                    </CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-1" />
                        <span className="text-2xl font-bold quicksand-bold">
                          {playhouse.rating}
                        </span>
                      </div>
                      <span className="text-gray-600 quicksand-regular">
                        Based on 245 reviews
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b pb-6 last:border-b-0"
                        >
                          <div className="flex items-start space-x-4">
                            <Image
                              width={10}
                              height={10}
                              src={review.avatar}
                              alt={review.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold quicksand-semibold">
                                  {review.name}
                                </h5>
                                <span className="text-sm text-gray-500 quicksand-regular">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-500 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-600 quicksand-regular">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="quicksand-bold">
                      Location &amp; Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 quicksand-regular">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                        <span>{playhouse.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-gray-400" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Open Daily: 10:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-6 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-600 quicksand-regular">
                        Interactive Map would be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 quicksand-regular">
              <CardHeader>
                <CardTitle className="flex items-center justify-between quicksand-bold">
                  <span>Book Your Visit</span>
                  <span className="text-primary text-2xl font-bold">
                    ₹{playhouse.price}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600 quicksand-medium">
                  Price per child • Age range: {playhouse.ageRange}
                </div>

                <Button
                  className="w-full quicksand-bold"
                  size="lg"
                  onClick={() => router.push(`/booking/${playhouse.id}`)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 quicksand-regular">
                    Free cancellation up to 24 hours before visit
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold quicksand-semibold">
                    What&apos;s Included
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside quicksand-regular">
                    <li>Unlimited play time</li>
                    <li>Safety socks included</li>
                    <li>Locker facility</li>
                    <li>Complimentary water</li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-semibold quicksand-semibold">
                    Special Offers
                  </h4>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700 quicksand-medium">
                      <strong>Weekend Special:</strong> Buy 2 tickets, get 1
                      free snack!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
