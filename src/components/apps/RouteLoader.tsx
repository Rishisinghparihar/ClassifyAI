"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const RouteLoader = () => {
  const pathname = usePathname();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  useEffect(() => {
    setIsRouteChanging(true);
    const timeout = setTimeout(() => {
      setIsRouteChanging(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return isRouteChanging ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  ) : null;
};

export default RouteLoader;
