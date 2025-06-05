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
      toast.success("Login Successfull");
      router.push(`/dashboard/${data.user.role.toLowerCase()}`);
    } else {
      console.error("Login Failed, Status: ", res.status);
      toast.error(data.message || "Login Failed!");
    }
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={role}
        onChange={(e) =>
          setRole(e.target.value as "STUDENT" | "TEACHER" | "ADMIN")
        }
      >
        <option value="STUDENT">Student</option>
        <option value="TEACHER">Teacher</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button onClick={handleLogin}>Login / Register</button>
    </div>
  );
};

export default Page;
