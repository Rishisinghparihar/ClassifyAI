"use client";
import React, { useEffect } from "react";
import { Token } from "@/lib/types";
import toast from "react-hot-toast";

export default function TeacherDashboard() {
  const [tokens, setTokens] = React.useState<Token[]>([]);
  const [loading, setLoading] = React.useState(false);
  const teacherId = "teacher-123"; // To be replaced with real id from local storage.
  const fetchTokens = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/teacher/${teacherId}/tokens`);
      const data = await res.json();
      if (res.ok) {
        setTokens(data);
      } else {
        toast.error("Failed to load tokens");
        console.error("Error fetching tokens:", data);
      }
    } catch (error) {
      toast.error("Error fetching tokens:");
      console.error("Token Fetching error" + error);
    } finally {
      setLoading(false);
    }
  };
  const generateToken = async () => {
    const subject = prompt("Enter Subject Name:");
    if (!subject) {
      toast.error("Subject name is required");
      return;
    }
    try {
      const res = await fetch(`/api/teacher/generate-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ professorId: teacherId, subject }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Token generated successfully");
        fetchTokens();
      } else {
        toast.error("Failed to generate token");
        console.error("Error generating token:", data);
      }
    } catch (error) {
      toast.error("Error generating token");
      console.error("Token Generation error" + error);
    }
  };
  useEffect(() => {
    fetchTokens();
  }, []);
  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <button onClick={generateToken}>Generate Attendance Token</button>
      <div className="mt-6">
        <h3>Today's Tokens</h3>
        {loading ? (
          <p>Loading...</p>
        ) : tokens.length === 0 ? (
          <p>No tokens generated today.</p>
        ) : (
          <ul>
            {tokens.map((token) => (
              <li key={token.id}>
                <p>
                  <strong> Subject: </strong>
                  {token.subject}
                </p>
                <p>
                  <strong>Token: </strong>
                  {token.token}
                </p>
                <p>
                  <strong>Expires At: </strong>
                  {new Date(token.expiresAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
