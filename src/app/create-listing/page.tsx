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
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Upload, MapPin, DollarSign, X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// interface CreateListingProps {
//   onNavigate: (page: any) => void;
// }

const features = [
  "Indoor Play",
  "Outdoor Play",
  "Birthday Parties",
  "Swimming Pool",
  "Café",
  "Arcade Games",
  "Soft Play",
  "Bounce Castle",
  "Mini Golf",
  "Face Painting",
  "Water Play",
  "Climbing Wall",
  "Art & Craft",
];

const cities = [
  "Delhi",
  "Gurugram",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
];

export default function CreateListing() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    city: "",
    price: "",
    ageRange: "",
    phone: "",
    email: "",
    website: "",
    features: [] as string[],
    openingHours: {
      monday: { open: "10:00", close: "20:00", closed: false },
      tuesday: { open: "10:00", close: "20:00", closed: false },
      wednesday: { open: "10:00", close: "20:00", closed: false },
      thursday: { open: "10:00", close: "20:00", closed: false },
      friday: { open: "10:00", close: "20:00", closed: false },
      saturday: { open: "10:00", close: "20:00", closed: false },
      sunday: { open: "10:00", close: "20:00", closed: false },
    },
  });
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allFeatures, setAllFeautres] = useState(features);
  const [newFeature, setNewFeature] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, feature]
        : prev.features.filter((f) => f !== feature),
    }));
  };

  const handleHoursChange = (
    day: string,
    field: string,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours[day as keyof typeof prev.openingHours],
          [field]: value,
        },
      },
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      console.log(filesArray);

      const newImages = filesArray.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...newImages]);

      // clean up memory after preview
      filesArray.forEach((file) =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert(
        "🎉 Congratulations! Your playzone listing has been submitted successfully! \n\nOur team will review it within 24 hours and you'll receive a confirmation email once it's live. Get ready to welcome families to your amazing playzone! 🎪"
      );
      router.push("/");
      setIsLoading(false);
    }, 2000);
  };

  const handleAddNewFeature = () => {
    if (newFeature.trim() && !allFeatures.includes(newFeature)) {
      setAllFeautres((prev) => [...prev, newFeature]);
      setNewFeature("");
    } else {
      alert("select different feature.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎪</div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent quicksand-bold">
            List Your Amazing Playzone! ✨
          </h1>
          <p className="text-xl text-gray-600 quicksand-medium">
            Join thousands of families and showcase your playzone to the world!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="shadow-lg border-2 border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl quicksand-bold">
                <Sparkles className="w-6 h-6 mr-2" />
                Basic Information
              </CardTitle>
              <CardDescription className="text-purple-100 quicksand-regular">
                Tell us about your amazing playzone!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-lg quicksand-semibold">
                    Playzone Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="e.g., Fun Castle Kids Zone"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="mt-2 text-lg p-3  quicksand-regular"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-lg quicksand-semibold">
                    City *
                  </Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleInputChange("city", value)}
                  >
                    <SelectTrigger className="mt-2 text-sm p-3 quicksand-regular">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem
                          key={city}
                          value={city}
                          className="quicksand-regular"
                        >
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="location"
                  className="text-lg quicksand-semibold"
                >
                  Complete Address *
                </Label>
                <div className="relative mt-2 flex">
                  <MapPin className=" text-gray-400 w-5 h-5 mt-4" />
                  <Textarea
                    id="location"
                    required
                    className="pl-10 text-lg p-3 quicksand-regular"
                    placeholder="Enter your complete address with landmarks for easy discovery"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="description"
                  className="text-lg quicksand-semibold"
                >
                  About Your Playzone *
                </Label>
                <Textarea
                  id="description"
                  required
                  placeholder="Describe what makes your playzone special! Include facilities, unique features, and what kids love most about it."
                  className="h-32 mt-2 text-lg p-3 quicksand-regular"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price" className="text-lg quicksand-semibold">
                    Entry Price per Child (₹) *
                  </Label>
                  <div className="relative mt-2 flex">
                    <DollarSign className="mt-2 text-gray-400 w-5 h-5" />
                    <Input
                      id="price"
                      type="number"
                      required
                      className="pl-10 text-lg p-3 quicksand-regular"
                      placeholder="399"
                      value={formData.price}
                      onChange={(e) =>
                        handleInputChange("price", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="ageRange"
                    className="text-lg quicksand-semibold"
                  >
                    Recommended Age Range *
                  </Label>
                  <Input
                    id="ageRange"
                    required
                    placeholder="e.g., 2-12 years"
                    value={formData.ageRange}
                    onChange={(e) =>
                      handleInputChange("ageRange", e.target.value)
                    }
                    className="mt-2 text-lg p-3 quicksand-regular"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card className="shadow-lg border-2 border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl quicksand-bold">
                🎯 Features & Amenities
              </CardTitle>
              <CardDescription className="text-blue-100 quicksand-regular">
                What awesome features does your playzone offer?
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {allFeatures.map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50  transition-colors cursor-pointer"
                  >
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={(checked) =>
                        handleFeatureToggle(feature, checked as boolean)
                      }
                      className="w-5 h-5"
                    />
                    <label
                      htmlFor={feature}
                      className="text-base font-medium cursor-pointer quicksand-medium capitalize"
                    >
                      {feature}
                    </label>
                  </label>
                ))}

                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  type="text"
                  placeholder="others ... "
                  className="border-b-blue-500 rounded-none focus:rounded-md  quicksand-semibold"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddNewFeature();
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card className="shadow-lg border-2 border-green-100">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl quicksand-bold">
                📸 Showcase Your Playzone
              </CardTitle>
              <CardDescription className="text-green-100 quicksand-regular">
                Upload beautiful photos to attract families (minimum 3 required)
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <Image
                      width="0"
                      height="0"
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-40 object-contain rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <label
                  htmlFor="input-file"
                  className=" border-2 border-dashed border-green-300 rounded-lg h-40 flex flex-col items-center justify-center hover:border-green-500 hover:bg-green-50 transition-colors cursor-pointer"
                >
                  <input
                    type="file"
                    id="input-file"
                    onChange={handleImageUpload}
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-green-400 mb-2" />
                  <span className="text-green-600 font-medium quicksand-semibold">
                    Add Photo
                  </span>
                </label>
              </div>
              <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg quicksand-medium">
                📷 {images.length}/10 photos uploaded. Upload at least 3
                high-quality photos showing different areas of your playzone!
              </p>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card className="shadow-lg border-2 border-orange-100">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl quicksand-bold">
                ⏰ Operating Schedule
              </CardTitle>
              <CardDescription className="text-orange-100 quicksand-regular">
                When is your playzone open for fun?
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {Object.entries(formData.openingHours).map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg"
                  >
                    <div className="w-28 capitalize font-medium text-orange-800 quicksand-semibold">
                      {day}
                    </div>
                    <Checkbox
                      checked={!hours.closed}
                      onCheckedChange={(checked) =>
                        handleHoursChange(day, "closed", !checked)
                      }
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium quicksand-medium">
                      Open
                    </span>
                    {!hours.closed && (
                      <>
                        <Input
                          type="time"
                          value={hours.open}
                          onChange={(e) =>
                            handleHoursChange(day, "open", e.target.value)
                          }
                          className="w-32 quicksand-regular"
                        />
                        <span className="font-medium quicksand-medium">to</span>
                        <Input
                          type="time"
                          value={hours.close}
                          onChange={(e) =>
                            handleHoursChange(day, "close", e.target.value)
                          }
                          className="w-32 quicksand-regular"
                        />
                      </>
                    )}
                    {hours.closed && (
                      <span className="text-gray-500 italic quicksand-regular">
                        Closed
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg border-2 border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl quicksand-bold">
                📞 Contact Details
              </CardTitle>
              <CardDescription className="text-purple-100 quicksand-regular">
                How can families reach you?
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-lg quicksand-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 text-lg p-3 quicksand-regular"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg quicksand-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="contact@yourplayzone.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2 text-lg p-3 quicksand-regular"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="website" className="text-lg quicksand-semibold">
                  Website (Optional)
                </Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://www.yourplayzone.com"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="mt-2 text-lg p-3 quicksand-regular"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-lg">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
              className="text-lg px-6 py-3 quicksand-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || images.length < 3}
              className="px-8 py-3 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 quicksand-bold"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Your Listing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  🚀 Launch My Playzone!
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
