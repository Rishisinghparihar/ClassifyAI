import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ClientNavBlocker from "@/components/apps/ClientNavBlocker";
import RazorpayScriptLoader from "@/components/apps/RazorpayScriptLoader";
import RouteLoader from "@/components/apps/RouteLoader";
import NetworkListener from "@/components/apps/NetworkListener";
import RootBackground from "@/components/apps/RootBackground";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="font-lora antialiased relative min-h-screen overflow-hidden">
        <RootBackground />

        <ClientNavBlocker />
        <RazorpayScriptLoader />
        <RouteLoader />
        <NetworkListener />
        <Toaster position="bottom-center" reverseOrder={false} />

        <div className="relative z-10">{children}</div>

        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
          <p>© 2025 ClassifyAI</p>
        </div>
      </body>
    </html>
  );
}
