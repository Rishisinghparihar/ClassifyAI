"use client";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { SupportRequest } from "@/lib/types";
import { Tektur } from "next/font/google";
import React, { useEffect, useState } from "react";
const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ContactRequestsSection = () => {
  const [requests, setRequests] = useState<SupportRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/settings/contact-requests");
      const data = await res.json();
      if (res.ok) {
        setRequests(data.requests);
      } else {
        showErrorMessage("Failed to fetch requests.");
      }
    } catch (error) {
      showErrorMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/settings/contact-requests/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        showSuccessMessage("Request deleted.");
        setRequests((prev) => prev.filter((r) => r.id !== id));
      } else {
        showErrorMessage("Failed to delete.");
      }
    } catch {
      showErrorMessage("Something went wrong.");
    }
  };

  return (
    <div className="bg-white/5 h-[75vh] z-0 relative flex flex-col items-center p-6 rounded-xl shadow w-full overflow-hidden">
      <h2
        className={`text-4xl font-bold mb-4 text-orange-300 ${tektur.className}`}
      >
        Contact Requests
      </h2>
      {loading ? (
        <p className="text-white/80 animate-pulse">Loading requests…</p>
      ) : requests.length === 0 ? (
        <p className="text-white/80 text-center text-xl mt-52">
          No contact requests yet.
        </p>
      ) : (
        <div className="overflow-y-auto w-full max-w-4xl">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-neutral-900/80 text-white p-4 rounded mb-3 shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className={`${tektur.className} font-bold text-lg`}>
                    {req.name}
                  </h3>
                  <p className="text-sm text-white/70">
                    {new Date(req.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(req.id)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
              <p className="text-sm text-white/90">{req.message}</p>
              <a
                href={`mailto:${req.email}`}
                className="text-cyan-400 text-sm underline mt-1 inline-block"
              >
                Reply via Email
              </a>
            </div>
          ))}
        </div>
      )}
      <AnimatedBlobs />
    </div>
  );
};

export default ContactRequestsSection;
