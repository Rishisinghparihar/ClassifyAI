"use client";
import React, { useEffect } from "react";
import { Token } from "@/lib/types";
import toast from "react-hot-toast";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";

export default function TeacherDashboard() {
  const [tokens, setTokens] = React.useState<Token[]>([]);
  const [loading, setLoading] = React.useState(false);
  const teacherId = "teacher-123"; // To be replaced with real id from local storage.
  const fetchTokens = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/teacher/${teacherId}/tokens`);
      const data = await res.json();
      if (res.ok) {
        setTokens(data);
      } else {
        showErrorMessage("Failed to load tokens");
        console.log("Error fetching tokens:", data);
      }
    } catch (error) {
      showErrorMessage("Error fetching tokens:");
      console.log("Token Fetching error" + error);
    } finally {
      setLoading(false);
    }
  };
  const generateToken = async () => {
    const subject = prompt("Enter Subject Name:");
    if (!subject) {
      showErrorMessage("Subject name is required");
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
        showSuccessMessage("Token generated successfully");
        fetchTokens();
      } else {
        showErrorMessage("Failed to generate token");
        console.log("Error generating token:", data);
      }
    } catch (error) {
      showErrorMessage("Error generating token");
      console.log("Token Generation error" + error);
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
