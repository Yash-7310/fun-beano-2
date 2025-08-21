"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { allPlayhouses } from "../../listings/page";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Calendar } from "../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  CreditCard,
  UserRound,
} from "lucide-react";
import { format } from "date-fns";

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const playhouse = allPlayhouses.find((p) => p.id === parseInt(id as string));

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [childrenCount, setChildrenCount] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    specialRequests: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [totalAmount, setTotalAmount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const convenienceFee = 30;

  useEffect(() => {
    if (playhouse) {
      const baseEntryFee = playhouse.price * childrenCount;
      let discount = 0;
      if (paymentMethod === "online") {
        discount = baseEntryFee * 0.05;
      }
      const finalAmount = baseEntryFee - discount + convenienceFee;
      setTotalAmount(finalAmount);
    }
  }, [childrenCount, paymentMethod, playhouse]);

  useEffect(() => {
    const { fullName, phone, email } = contactInfo;
    const isValid = selectedDate && selectedTime && fullName && phone && email;
    setIsFormValid(!!isValid);
  }, [selectedDate, selectedTime, contactInfo]);

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/booking/confirmation");
    }
  };

  if (!playhouse) {
    return <div>Playhouse not found</div>;
  }

  const baseEntryFee = playhouse.price * childrenCount;
  const discount = paymentMethod === "online" ? baseEntryFee * 0.05 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Secure Your Spot! 🚀
          </h1>
          <p className="text-xl text-gray-600">
            You are booking a visit to <strong>{playhouse.name}</strong>
          </p>
        </header>

        <form
          onSubmit={handleBookingSubmit}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Date & Time Selection */}
            <Card className="shadow-lg border-2 border-blue-100">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-2xl">
                  🗓️ Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Choose Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          format(selectedDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${
                          selectedTime === time
                            ? "bg-blue-500 text-white border-blue-500"
                            : "hover:bg-gray-100 hover:border-gray-400"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="children-count"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Children
                  </label>
                  <Select
                    onValueChange={(value) => setChildrenCount(parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of children" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Child{num > 1 ? "ren" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg border-2 border-purple-100">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-2xl">
                  👨‍👩‍👧‍👦 Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="fullName"
                      placeholder="Enter your name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                      value={contactInfo.fullName}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Enter phone number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                      value={contactInfo.phone}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter email address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                      value={contactInfo.email}
                      onChange={handleContactChange}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="specialRequests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Special Requests (Optional)
                    </label>
                    <Input
                      id="specialRequests"
                      placeholder="Any special requirements or birthday party needs..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                      value={contactInfo.specialRequests}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="shadow-lg border-2 border-green-100">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-2xl">
                  💳 Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                  <p className="text-sm text-yellow-800">
                    Payment will be processed securely. You can pay online or at
                    the venue.
                  </p>
                </div>
                <div className="space-y-4">
                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "online"
                        ? "bg-green-50 border-green-500"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="online"
                      className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                      checked={paymentMethod === "online"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-3 text-sm font-medium text-gray-800">
                      Pay Online (Get 5% discount)
                    </span>
                  </label>
                  <label
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === "venue"
                        ? "bg-green-50 border-green-500"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value="venue"
                      className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                      checked={paymentMethod === "venue"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="ml-3 text-sm font-medium text-gray-800">
                      Pay at Venue
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-200 sticky top-12">
              <h2 className="text-2xl font-bold mb-4 border-b pb-4 text-center text-orange-500">
                Booking Summary
              </h2>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={playhouse.image}
                  alt={playhouse.name}
                  className="w-24 h-24 rounded-lg object-cover shadow-md border-2 border-white"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {playhouse.name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> {playhouse.location}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />{" "}
                    {playhouse.rating}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm mb-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-800">
                    {selectedDate
                      ? format(selectedDate, "PPP")
                      : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-gray-800">
                    {selectedTime || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Children:</span>
                  <span className="font-medium text-gray-800">
                    {childrenCount}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2 text-gray-800">
                  Included Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {playhouse.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 border-t-2 border-dashed pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Entry fee ({childrenCount}{" "}
                    {childrenCount > 1 ? "children" : "child"})
                  </span>
                  <span className="font-medium text-gray-800">
                    ₹{baseEntryFee.toFixed(2)}
                  </span>
                </div>
                {paymentMethod === "online" && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Online Discount (5%)</span>
                    <span className="font-medium">
                      - ₹{discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Convenience fee</span>
                  <span className="font-medium text-gray-800">
                    ₹{convenienceFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t-2 border-orange-500 pt-2 mt-2 text-orange-600">
                  <span>Total Amount</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-green-50 text-green-700 text-xs text-center p-3 rounded-lg mt-6">
                Free cancellation up to 24 hours before your visit
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-4 rounded-lg mt-6 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Confirm Booking - <span>₹{totalAmount.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
