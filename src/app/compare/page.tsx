"use client";

import React, { useState } from "react";
import { useCompare } from "../../context/CompareContext";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import {
  Star,
  MapPin,
  IndianRupee,
  X,
  Plus,
  ArrowLeft,
  Trophy,
  Share2,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useRouter } from "next/navigation";
import { allPlayhouses } from "../listings/page";

export default function ComparePage() {
  const {
    compareList,
    removeFromCompare,
    addToCompare,
    isInCompare,
    getShareableLink,
  } = useCompare();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const link = getShareableLink();
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const availablePlayhouses = allPlayhouses.filter(
    (p) => !compareList.some((item) => item.id === p.id)
  );

  const comparisonFeatures = [
    { key: "price", label: "Price", type: "price" },
    { key: "rating", label: "Rating", type: "rating" },
    { key: "distance", label: "Distance", type: "number" },
    { key: "ageRange", label: "Age Groups", type: "text" },
    { key: "features", label: "Features", type: "array" },
  ];

  const renderFeatureValue = (playhouse: any, feature: any) => {
    const value = playhouse[feature.key];

    switch (feature.type) {
      case "price":
        return (
          <div className="flex items-center gap-1 font-semibold text-orange-500">
            <IndianRupee className="w-4 h-4" />
            <span>{value}</span>
          </div>
        );
      case "rating":
        return (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="font-semibold">{value}</span>
          </div>
        );
      case "number":
        return <span className="font-medium">{value} km</span>;
      case "text":
        return <span className="text-sm">{value}</span>;
      case "array":
        return (
          <div className="flex flex-wrap gap-1">
            {value.slice(0, 3).map((item: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
            {value.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{value.length - 3}
              </Badge>
            )}
          </div>
        );
      default:
        return <span>{value}</span>;
    }
  };

  const getBestValue = (feature: any) => {
    if (compareList.length < 2) return null;

    switch (feature.key) {
      case "price":
        const minPrice = Math.min(...compareList.map((p: any) => p.price));
        return compareList.find((p) => p?.price === minPrice)?.id;
      case "rating":
        const maxRating = Math.max(...compareList.map((p: any) => p.rating));
        return compareList.find((p) => p?.rating === maxRating)?.id;
      case "distance":
        const minDistance = Math.min(
          ...compareList.map((p: any) => p.distance)
        );
        return compareList.find((p) => p.distance === minDistance)?.id;
      default:
        return null;
    }
  };

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 quicksand-bold">
                No playhouses to compare
              </h2>
              <p className="text-gray-600 mb-6 quicksand-regular">
                Add playhouses to compare their features, prices, and amenities
                side by side.
              </p>
              <Button
                onClick={() => router.push("/listings")}
                className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white quicksand-semibold"
              >
                Browse Playhouses
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* <Button
                  variant="ghost"
                  onClick={() => router.push("/listings")}
                  className="flex items-center gap-2 text-gray-800 hover:text-orange-500"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Results
                </Button> */}
                <Button
                  variant="secondary"
                  onClick={handleShare}
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="quicksand-semibold">{copied ? "Copied!" : "Share"}</span>
                </Button>
              </div>
              <h1 className="text-3xl font-bold quicksand-bold">Compare Playhouses</h1>
              <p className="text-gray-600 quicksand-medium">
                Compare {compareList.length} playhouse
                {compareList.length !== 1 ? "s" : ""} side by side
              </p>
            </div>

            {compareList.length >= 2 && (
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 text-orange-500">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold quicksand-semibold">Great Comparison!</span>
                </div>
                <p className="text-sm text-gray-600 quicksand-regular">
                  You are comparing {compareList.length} amazing playhouses
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Playhouse Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                {compareList.map((playhouse: any) => (
                  <Card
                    key={playhouse?.id}
                    className="relative border-0 shadow-lg overflow-hidden"
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 z-10 rounded-full w-8 h-8 p-0 bg-white/90 hover:bg-white"
                      onClick={() => removeFromCompare(playhouse.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>

                    <CardHeader className="p-0">
                      <div
                        className="relative cursor-pointer"
                        onClick={() =>
                          router.push(`/playhouse/${playhouse.id}`)
                        }
                      >
                        <ImageWithFallback
                          src={playhouse.image}
                          alt={playhouse.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-white/90 text-gray-800">
                            <Star className="w-3 h-3 mr-1 fill-yellow-500 text-yellow-500" />
                            {playhouse.rating}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 hover:text-orange-500 cursor-pointer quicksand-bold">
                        {playhouse?.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-4 quicksand-medium">
                        <MapPin className="w-3 h-3 mr-1" />
                        {playhouse?.location}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 rounded-xl quicksand-semibold"
                          onClick={() =>
                            router.push(`/playhouse/${playhouse.id}`)
                          }
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white quicksand-semibold"
                          onClick={() =>
                            router.push(`/booking/${playhouse.id}`)
                          }
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add More Card */}
                {compareList.length < 4 && (
                  <Card className="border-2 border-dashed border-gray-300 bg-gray-100">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plus className="w-8 h-8 text-orange-500" />
                      </div>
                      <h3 className="font-semibold mb-2 quicksand-bold">Add Another</h3>
                      <p className="text-sm text-gray-600 mb-4 quicksand-regular">
                        Compare up to 4 playhouses
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push("/listings")}
                        className="quicksand-semibold"
                      >
                        Browse More
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Comparison Features */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {comparisonFeatures.map((feature, index) => {
                          const bestValueId = getBestValue(feature);

                          return (
                            <tr
                              key={feature.key}
                              className={
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                              }
                            >
                              <td className="p-4 font-medium text-gray-600 border-r border-gray-200 min-w-[150px] quicksand-semibold">
                                {feature.label}
                              </td>
                              {compareList.map((playhouse: any) => (
                                <td
                                  key={playhouse.id}
                                  className={`p-4 text-center border-r border-gray-200 last:border-r-0 quicksand-regular ${
                                    bestValueId === playhouse.id
                                      ? "bg-yellow-100 relative"
                                      : ""
                                  }`}
                                >
                                  {bestValueId === playhouse.id && (
                                    <div className="absolute top-1 right-1">
                                      <Trophy className="w-4 h-4 text-orange-500" />
                                    </div>
                                  )}
                                  {renderFeatureValue(playhouse, feature)}
                                </td>
                              ))}
                              {/* Empty cells for missing playhouses */}
                              {Array.from({
                                length: 4 - compareList.length,
                              }).map((_, i) => (
                                <td
                                  key={i}
                                  className="p-4 border-r border-gray-200 last:border-r-0"
                                >
                                  <span className="text-gray-400">-</span>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Add Section */}
              {availablePlayhouses.length > 0 && compareList.length < 4 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 quicksand-bold">
                    Add More Playhouses
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availablePlayhouses.slice(0, 3).map((playhouse) => (
                      <Card
                        key={playhouse.id}
                        className="border border-gray-200 hover:shadow-md transition-shadow quicksand-regular"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <ImageWithFallback
                              src={playhouse.image}
                              alt={playhouse.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm quicksand-semibold">
                                {playhouse.name}
                              </h4>
                              <p className="text-xs text-gray-500 quicksand-regular">
                                {playhouse.location}
                              </p>
                              <div className="flex items-center gap-1 mt-1">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span className="text-xs quicksand-regular">
                                  {playhouse.rating}
                                </span>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToCompare(playhouse)}
                              disabled={compareList.length >= 4}
                              className="quicksand-semibold"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
