import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A1 Holiday Company - Premium Holiday Packages & TimeShare",
  description: "Experience luxury holidays with A1 Holiday Company. Explore 5-star hotels, flight packages, and exclusive time-sharing memberships for unforgettable vacations.",
  keywords: "holiday packages, 5-star hotels, TimeShare, vacation packages, luxury travel, A1 Holiday Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
