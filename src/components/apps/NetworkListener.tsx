// src/components/NetworkListener.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const NetworkListener = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleOnline = () => {
      if (pathname === "/no-internet") router.replace("/dashboard/student"); // or wherever you want
    };

    const handleOffline = () => {
      if (pathname !== "/no-internet") router.replace("/no-internet");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial check
    if (!navigator.onLine) {
      router.replace("/no-internet");
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pathname, router]);

  return null;
};

export default NetworkListener;
