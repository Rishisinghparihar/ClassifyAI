"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const NetworkListener = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAndRedirect = () => {
      const isOnline = navigator.onLine;
      const lastPage = localStorage.getItem("last-online-page") || "/dashboard/student";

      if (isOnline && pathname === "/no-internet") {
        router.replace(lastPage);
      }

      if (!isOnline && pathname !== "/no-internet") {
        localStorage.setItem("last-online-page", pathname);
        router.replace("/no-internet");
      }
    };

    window.addEventListener("online", checkAndRedirect);
    window.addEventListener("offline", checkAndRedirect);

    // Also run it once on mount
    checkAndRedirect();

    return () => {
      window.removeEventListener("online", checkAndRedirect);
      window.removeEventListener("offline", checkAndRedirect);
    };
  }, [pathname, router]);

  return null;
};

export default NetworkListener;
