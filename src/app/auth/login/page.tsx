"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !name) {
      toast.error("Please fill in both fields");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, name, role }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login Successful");
      router.push(`/dashboard/${data.user.role.toLowerCase()}`);
    } else {
      console.error("Login Failed, Status: ", res.status);
      toast.error(data.message || "Login Failed!");
    }
  };

  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: 'url("/bg-5.webp")' }}
      />

      {/* Foreground */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
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
          <select
            className="p-2 rounded bg-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-500"
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "STUDENT" | "TEACHER" | "ADMIN")
            }
          >
            <option value="" disabled hidden>Select Role</option>
            <option value="STUDENT" className="bg-black text-white">Student</option>
            <option value="TEACHER" className="bg-black text-white">Teacher</option>
            <option value="ADMIN" className="bg-black text-white">Admin</option>
          </select>
          <button
            onClick={handleLogin}
            className="border-2 border-white rounded p-2 text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
