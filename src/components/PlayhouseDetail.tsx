import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import {
  MapPin,
  Star,
  Users,
  Clock,
  Phone,
  Calendar,
  Share2,
  Heart,
  Camera,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "./AuthModal";
import { Playhouse } from "@/data/playhouses";

// interface PlayhouseDetailProps {
//   playhouse: ;
//   // onNavigate: (page: any, data?: any) => void;
// }

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

export function PlayhouseDetail({ playhouse }: { playhouse: Playhouse }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="mb-2">{playhouse?.name}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {playhouse.location}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  {playhouse.rating} (245 reviews)
                </div>
                <div className="flex items-center text-red-500">
                  <Users className="w-4 h-4 mr-1" />
                  {playhouse.liveViewers} people viewing
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Save
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
                  <ImageWithFallback
                    src={gallery[selectedImage]}
                    alt={playhouse?.name}
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
                      <ImageWithFallback
                        key={index}
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className={`w-full h-20 object-cover rounded cursor-pointer ${
                          selectedImage === index ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setSelectedImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Playhouse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {playhouse?.name} is a premium children&apos;s play area
                      designed to provide a safe, fun, and engaging environment
                      for kids of all ages. Our facility features
                      state-of-the-art play equipment, interactive games, and
                      dedicated areas for different age groups.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="mb-2">Age Range</h4>
                        <p className="text-gray-600">{playhouse.ageRange}</p>
                      </div>
                      <div>
                        <h4 className="mb-2">Operating Hours</h4>
                        <p className="text-gray-600">
                          10:00 AM - 8:00 PM (Daily)
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">Safety Features</h4>
                        <p className="text-gray-600">
                          CCTV Monitoring, First Aid, Trained Staff
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">Parking</h4>
                        <p className="text-gray-600">Free parking available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facilities">
                <Card>
                  <CardHeader>
                    <CardTitle>Facilities &amp; Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="mb-3">Play Areas</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Soft play area for toddlers</li>
                          <li>• Multi-level play structure</li>
                          <li>• Ball pit with over 10,000 balls</li>
                          <li>• Climbing walls and slides</li>
                          <li>• Interactive gaming zone</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3">Additional Services</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Birthday party packages</li>
                          <li>• Parent seating area</li>
                          <li>• Café with healthy snacks</li>
                          <li>• Event hosting facilities</li>
                          <li>• Lockers and storage</li>
                        </ul>
                      </div>
                    </div>
                    <Separator className="my-6" />
                    <div className="flex flex-wrap gap-2">
                      {playhouse.features.map((feature: string) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-sm"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-500 mr-1" />
                        <span className="text-2xl">{playhouse.rating}</span>
                      </div>
                      <span className="text-gray-600">
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
                            <ImageWithFallback
                              src={review.avatar}
                              alt={review?.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5>{review?.name}</h5>
                                <span className="text-sm text-gray-500">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-600">{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location">
                <Card>
                  <CardHeader>
                    <CardTitle>Location &amp; Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
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
                      <p className="text-gray-600">
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
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Book Your Visit</span>
                  {isAuthenticated ? (
                    <span className="text-primary">₹{playhouse.price}</span>
                  ) : (
                    <span className="text-primary">₹****</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-gray-600">
                  Price per child • Age range: {playhouse.ageRange}
                </div>

                {isAuthenticated ? (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => router.push(`/booking/${playhouse.id}`)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                ) : (
                  <AuthModal
                  // onAuthSuccess={() => login({ name: "User" })}
                  />
                )}

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Free cancellation up to 24 hours before visit
                  </p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4>What&apos;s Included</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Unlimited play time</li>
                    <li>• Safety socks included</li>
                    <li>• Locker facility</li>
                    <li>• Complimentary water</li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4>Special Offers</h4>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700">
                      Weekend Special: Buy 2 tickets, get 1 free snack!
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
