"use client";

import React, { useState, Suspense, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Slider } from "../../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { MapPin, Star, Users, Filter, GitCompare, Heart } from "lucide-react";
// import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useRouter, useSearchParams } from "next/navigation";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import Image from "next/image";

import { allPlayhouses } from "../../data/playhouses";

function ListingsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterBirthday, setFilterBirthday] = useState(
    searchParams.get("filter") || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get("city") || "all"
  );
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [distanceRange, setDistanceRange] = useState([10]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { compareList, addToCompare, removeFromCompare, isInCompare } =
    useCompare();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const features = [
    "Indoor Play",
    "Outdoor Play",
    "Birthday Parties",
    "Swimming Pool",
    "Café",
    "Arcade Games",
    "Soft Play",
  ];

  const filteredPlayhouses = allPlayhouses.filter((playhouse) => {
    const matchesCity =
      selectedCity === "all" || playhouse.city === selectedCity;
    const matchesPrice =
      playhouse.price >= priceRange[0] && playhouse.price <= priceRange[1];
    const matchesDistance = playhouse.distance <= distanceRange[0];
    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.some((feature) => playhouse.features.includes(feature));
    const matchesSearch =
      searchQuery === "" ||
      playhouse.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      playhouse.location.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesCity &&
      matchesPrice &&
      matchesDistance &&
      matchesFeatures &&
      matchesSearch
    );
  });

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setSelectedFeatures((prev) =>
      checked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

  useEffect(() => {
    filterBirthday === "birthday" &&
      handleFeatureChange("Birthday Parties", true);

    return () => {
      setFilterBirthday("");
    };
  }, [filterBirthday]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12 mt-10">
          <h1 className="text-4xl md:text-7xl mb-4 sunny-spells bg-gradient-to-b from-orange-500 to-red-600 bg-clip-text text-transparent">
            Find Playzones Near You
          </h1>
          <p className="text-gray-600 text-lg quicksand-semibold">
            Discover the best play areas for your children
          </p>
        </div>

        <div className="lg:hidden mb-4">
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full quicksand-bold"
          >
            <Filter className="w-5 h-5 mr-2" />
            {isFilterOpen ? "Close Filters" : "Show Filters"}
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:col-span-1 ${isFilterOpen ? "block" : "hidden"
              } lg:block`}
          >
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl quicksand-bold">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block mb-2 quicksand-bold">Search</label>
                  <Input
                    className="quicksand-semibold border border-primary"
                    placeholder="Search playzones..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* City Filter */}
                <div>
                  <label className="block mb-2 quicksand-bold ">City</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="border border-primary">
                      <SelectValue
                        placeholder="Select city"
                        className="quicksand-semibold"
                      />
                    </SelectTrigger>
                    <SelectContent className="quicksand-semibold">
                      <SelectItem value="all">All Cities</SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                      <SelectItem value="Gurugram">Gurugram</SelectItem>
                      <SelectItem value="Mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block mb-2 quicksand-bold ">
                    Price Range (₹)
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={50}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="quicksand-semibold">₹{priceRange[0]}</span>
                    <span className="quicksand-semibold">₹{priceRange[1]}</span>
                  </div>
                </div>

                {/* Distance Range */}
                <div>
                  <label className="block mb-2 quicksand-bold">
                    Distance (km)
                  </label>
                  <Slider
                    value={distanceRange}
                    onValueChange={setDistanceRange}
                    max={20}
                    min={1}
                    step={1}
                    className="mb-2"
                  />
                  <div className="text-sm text-gray-600 quicksand-medium">
                    Within {distanceRange[0]} km
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block mb-2 quicksand-bold">Features</label>
                  <div className="space-y-2 font-regular">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={(checked) =>
                            handleFeatureChange(feature, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={feature}
                          className="text-sm quicksand-medium cursor-pointer"
                        >
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listings */}
          <div className="lg:col-span-3">
            {/* Compare Bar */}
            {compareList.length > 0 && (
              <Card className="sticky top-20 z-20 mb-6 bg-blue-50 border-blue-200">
                <CardContent className="p-4 [&:last-child]:pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GitCompare className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Compare Selected ({compareList.length}/4)</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-500 text-white hover:bg-blue-700"
                      onClick={() => router.push("/compare")}
                    >
                      Compare Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600 quicksand-medium">
                {filteredPlayhouses.length} playzones found
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredPlayhouses.map((playhouse) => (
                <Card
                  key={playhouse.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <Image
                      width={200}
                      height={0}
                      src={playhouse.image}
                      alt={playhouse.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3  bg-red-500 text-white px-2 py-1 rounded-full text-sm flex items-center quicksand-semibold">
                      <Users className="w-3 h-3 mr-1 animate-pulse" />
                      <span className="animate-pulse">
                        {playhouse.liveViewers} live
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isInCompare(playhouse.id)) {
                            removeFromCompare(playhouse.id);
                          } else {
                            addToCompare(playhouse);
                          }
                        }}
                        className={
                          isInCompare(playhouse.id)
                            ? "bg-blue-600 text-white"
                            : ""
                        }
                      >
                        <GitCompare className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isInWishlist(playhouse.id)) {
                            removeFromWishlist(playhouse.id);
                          } else {
                            console.log(playhouse);
                            addToWishlist(playhouse);
                          }
                        }}
                      >
                        <Heart
                          className={`w-4 h-4 ${isInWishlist(playhouse.id)
                            ? "text-white fill-current"
                            : ""
                            }`}
                        />
                      </Button>
                    </div>
                  </div>
                  <CardHeader
                    onClick={() => router.push(`/playhouse/${playhouse.id}`)}
                  >
                    <CardTitle className="flex items-center justify-between">
                      {playhouse.name}
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {playhouse.rating}
                      </div>
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 quicksand-medium">
                        <MapPin className="w-4 h-4 mr-1" />
                        {playhouse.location} • {playhouse.distance} km away
                      </div>
                      <div className="text-sm  text-[#9C27B0] quicksand-semibold">
                        Age Range: {playhouse.ageRange}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    onClick={() => router.push(`/playhouse/${playhouse.id}`)}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      <h1 className="quicksand-bold">Features:</h1>
                      {playhouse.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="default"
                          className="bg-red-50 border border-red-300 rounded-full"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-xl quicksand-bold  ">
                        ₹{playhouse.price}{" "}
                        <span className="quicksand-medium text-xs text-black">
                          / child
                        </span>
                      </span>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/booking/${playhouse.id}`);
                        }}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPlayhouses.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    No playhouses found matching your criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCity("all");
                      setPriceRange([0, 1000]);
                      setDistanceRange([10]);
                      setSelectedFeatures([]);
                      setSearchQuery("");
                      router.push("/listings");
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Listings() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsContent />
    </Suspense>
  );
}
