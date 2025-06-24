import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientNavBlocker from "@/components/apps/ClientNavBlocker";
import RazorpayScriptLoader from "@/components/apps/RazorpayScriptLoader";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="en" className={lora.variable}>
      <body className="font-lora antialiased relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110 z-0"
          style={{ backgroundImage: 'url("/bg-5.webp")' }}
        />
        <ClientNavBlocker/>
        <RazorpayScriptLoader/>
        <Toaster position="bottom-center" reverseOrder={false} />

        <div className="relative z-10">{children}</div>

        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
          <p>© 2025 ClassifyAI</p>
        </div>
      </body>
    </html>
  );
}
