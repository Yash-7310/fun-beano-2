"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function AuthModal({
  // onAuthSuccess,
  title,
  btnStyle,
  children,
}: {
  // onAuthSuccess: () => void;
  title?: string;
  btnStyle?: string;
  children?: React.ReactNode;
}) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleContactSubmit = async () => {
    console.log(name, contact);
    if ((contact && name) || (contact.length > 0 && name.length > 0)) {
      console.log(`Sending OTP to ${contact}`);
      const res = await fetch("http://localhost:5001/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact }),
      });

      if (res.ok) {
        const data = await res.json();
        setStep(2);
        setTimer(60);
        alert(`${data.message}`);
      } else {
        throw new Error(`error registering contact`);
      }
    } else {
      alert("Contact and Name required");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setOpen(false);
        alert("Logged in successfully");
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (e) {
      throw new Error(`error submitting otp: ${e}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button className={btnStyle}>{title ? title : "View Price"}</Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-neutral-100">
        <DialogHeader>
          <DialogTitle>
            {step === 1 ? "Enter your contact information" : "Enter OTP"}
          </DialogTitle>
        </DialogHeader>
        {step === 1 ? (
          <div className="space-y-4">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Button onClick={handleContactSubmit}>Send OTP</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={handleOtpSubmit}>Verify OTP</Button>
            <div className="text-center text-sm text-gray-500">
              {timer > 0 ? (
                <p>
                  Resend OTP in {Math.floor(timer / 60)}:
                  {String(timer % 60).padStart(2, "0")}
                </p>
              ) : (
                <Button variant="link" onClick={handleContactSubmit}>
                  Resend OTP
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
