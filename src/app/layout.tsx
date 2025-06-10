import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClassifyAI",
  description: "Smart Attendance & Exam Tracker App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen overflow-hidden`}
      >
        {/* Global Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110 z-0"
          style={{ backgroundImage: 'url("/bg-5.webp")' }}
        />

        {/* Toast notifications */}
        <Toaster position="bottom-center" reverseOrder={false} />

        {/* Main content (z-10 to stay above background) */}
        <div className="relative z-10">{children}</div>
        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
          <p>© 2025 ClassifyAI</p>
        </div>
      </body>
    </html>
  );
}
