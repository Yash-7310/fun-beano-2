import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";
import { CompareProvider } from "@/context/CompareContext";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fun Beano",
  icons: {
    icon: "/icon/Logo.svg",
  },
  description:
    "Fun Beano is India's most trusted kids' aggregator platform, helping parents discover the best playhouses, activities, and experiences for their children in a safe, fun, and nurturing environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WishlistProvider>
          <CompareProvider>
            <Header />
            {children}
            <Footer />
          </CompareProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
