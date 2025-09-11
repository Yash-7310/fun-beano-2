"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function AuthModal({
  // onAuthSuccess,
  title,
  btnStyle,
  children,
  icon,
}: {
  // onAuthSuccess: () => void;
  icon?: React.ReactNode;
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
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true);
      const res = await fetch(
        "https://fun-beano-backend.onrender.com/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, contact }),
          credentials: "include",
        }
      );

      if (res.ok) {
        const data = await res.json();
        setStep(2);
        setTimer(60);
        setLoading(false);
        toast.success(`${data.message}`);
      } else {
        setLoading(false);
        toast.error("Error registering contact");
      }
    } else {
      setLoading(false);
      toast.error("Contact and Name required");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://fun-beano-backend.onrender.com/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, contact, otp }),
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        setOpen(false);
        toast.success("Logged in successfully");
        setLoading(false);
        window.location.reload();
      } else {
        setLoading(false);
        toast.error(data.message);
      }
    } catch (e) {
      setLoading(false);
      toast.error(`Error submitting OTP due to ${e}`);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button className={btnStyle}>
            {icon && icon} {title ? title : "View Price"}
          </Button>
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleContactSubmit();
                }
              }}
            />
            <Button loading={loading} onClick={handleContactSubmit}>
              Send OTP
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              ref={inputRef}
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleOtpSubmit();
                }
              }}
            />
            <Button loading={loading} onClick={handleOtpSubmit}>
              Verify OTP
            </Button>
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
