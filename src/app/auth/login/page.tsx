"use client";

import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !name) {
      showErrorMessage("Please fill in both fields");
      return;
    }

    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem(`${data.user.role.toLowerCase()}Id`, data.user.id);
      showSuccessMessage("Login Successful");
      router.push(`/dashboard/${data.user.role.toLowerCase()}`);
    } else {
      showErrorMessage(data.message || "Login Failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold py-3 leading-tight">
        INDIAN INSTITUTE OF TECHNOLOGY, GUWAHATI
      </h1>
      <h6 className="text-white text-sm sm:text-base pb-6 leading-tight">
        भारतीय प्रौद्योगिकी संस्थान, गुवाहाटी
      </h6>
      <h1 className="text-3xl text-white font-bold pb-4">LOGIN</h1>

      <div className="flex flex-col space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          className="p-2 rounded bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-500"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="p-2 rounded bg-white/10 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-500"
          onChange={(event) => setName(event.target.value)}
        />
        <button
          onClick={handleLogin}
          className="border-2 border-white rounded p-2 text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Page;
