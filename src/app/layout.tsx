import type { Metadata } from "next";
import { Geist, Geist_Mono,Space_Grotesk,Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({subsets: ["latin"]});

const spaceGrotesk = Space_Grotesk({subsets: ["latin"],weight: ['400', '500', '600', '700']});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotifyMe",
  description: "Notify me when product prices have dropped or are back in stock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
       <main className="max-w-10xl mx-auto">
        <Navbar/>
       {children}
       </main>
      </body>
    </html>
  );
}
