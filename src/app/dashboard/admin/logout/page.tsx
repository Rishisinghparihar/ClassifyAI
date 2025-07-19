"use client";

import { showSuccessMessage } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("adminId");
    showSuccessMessage("Admin Logged out!")
    router.replace("/auth/login");
  }, [router]);

  return null;
};

export default Logout;
