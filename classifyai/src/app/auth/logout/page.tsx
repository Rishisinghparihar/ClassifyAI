"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/auth/login");
  };
  return (
    <div>
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Page;
