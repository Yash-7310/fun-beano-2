import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  CreditCard,
  MapPin,
  Star,
  Check,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "next/navigation";

interface BookingProps {
  playhouse: any;
  onNavigate: (page: any) => void;
}

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

export function Booking({ playhouse, onNavigate }: BookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const totalAmount = numberOfChildren * playhouse.price;
  const convenienceFee = Math.round(totalAmount * 0.05);
  const finalAmount = totalAmount + convenienceFee;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate booking process
    setTimeout(() => {
      setBookingConfirmed(true);
      setIsLoading(false);
    }, 2000);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Your booking at {playhouse.name} has been confirmed. You will
                receive a confirmation email shortly.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h3 className="font-medium mb-4">Booking Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Booking ID:</span>
                    <span className="font-medium">
                      #PH{Date.now().toString().slice(-6)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Children:</span>
                    <span>{numberOfChildren}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Amount:</span>
                    <span className="font-medium">₹{finalAmount}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button onClick={() => onNavigate("home")} className="w-full">
                  Back to Home
                </Button>
                <Button variant="outline" className="w-full">
                  Download Ticket
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Secure your spot at {playhouse.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Date & Time Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label>Choose Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate
                            ? selectedDate.toLocaleDateString()
                            : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>Choose Time Slot</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={
                            selectedTime === time ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="children">Number of Children</Label>
                    <Select
                      value={numberOfChildren.toString()}
                      onValueChange={(value) =>
                        setNumberOfChildren(parseInt(value))
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Enter your name"
                        value={contactInfo.name}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        value={contactInfo.phone}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="requests">
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      id="requests"
                      placeholder="Any special requirements or birthday party needs..."
                      value={contactInfo.specialRequests}
                      onChange={(e) =>
                        setContactInfo((prev) => ({
                          ...prev,
                          specialRequests: e.target.value,
                        }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Payment will be processed securely. You can pay online or
                      at the venue.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="online"
                        defaultChecked
                        className="text-primary"
                      />
                      <label htmlFor="online">
                        Pay Online (Get 5% discount)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="venue"
                        name="payment"
                        value="venue"
                        className="text-primary"
                      />
                      <label htmlFor="venue">Pay at Venue</label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading || !selectedDate || !selectedTime}
              >
                {isLoading
                  ? "Processing..."
                  : `Confirm Booking - ₹${finalAmount}`}
              </Button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Playhouse Info */}
                <div className="flex space-x-3">
                  <ImageWithFallback
                    src={playhouse.image}
                    alt={playhouse.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{playhouse.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {playhouse.location}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {playhouse.rating}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Booking Details */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Date:</span>
                    <span>
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Time:</span>
                    <span>{selectedTime || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Children:</span>
                    <span>{numberOfChildren}</span>
                  </div>
                </div>

                <Separator />

                {/* Features */}
                <div>
                  <h5 className="font-medium mb-2">Included Features</h5>
                  <div className="flex flex-wrap gap-1">
                    {playhouse.features.map((feature: string) => (
                      <Badge
                        key={feature}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Entry fee ({numberOfChildren} children)</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Convenience fee</span>
                    <span>₹{convenienceFee}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>₹{finalAmount}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700">
                    Free cancellation up to 24 hours before your visit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
