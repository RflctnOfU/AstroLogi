import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AstroLogi",
  description: "An examination of Astrology under the hood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen flex flex-col items-center bg-cover relative bg-opacity-30 bg-[#1d1d1d]`}
      >
        <Image
          alt="background"
          src={"/images/MilkyWay.jpg"}
          width={1440}
          height={768}
          className="w-full h-full absolute -z-10 object-cover mix-blend-overlay"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
