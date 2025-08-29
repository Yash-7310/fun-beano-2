import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WishlistProvider } from "@/context/WishlistContext";
import { CompareProvider } from "@/context/CompareContext";

export const metadata: Metadata = {
  title: "Fun Beano",
  description:
    "Fun Beano is India's most trusted kids' aggregator platform, helping parents discover the best playhouses, activities, and experiences for their children in a safe, fun, and nurturing environment.",
  icons: {
    icon: "/Logo.svg",
  },
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
