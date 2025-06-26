"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const NetworkListener = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleOnline = () => {
      const lastPage = localStorage.getItem("last-online-page") || "/dashboard/student";
      if (pathname === "/no-internet") router.replace(lastPage);
    };
    const handleOffline = () => {
      if (pathname !== "/no-internet") {
        localStorage.setItem("last-online-page", pathname);
        router.replace("/no-internet");
      }
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    if (!navigator.onLine) {
      localStorage.setItem("last-online-page", pathname);
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
