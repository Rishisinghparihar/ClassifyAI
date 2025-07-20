"use client";

import { showErrorMessage, showSuccessMessage } from "@/lib/helper";
import { Tektur } from "next/font/google";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PremiumHeader = ({
  totalPremiumStudents,
}: {
  totalPremiumStudents: number;
}) => {
  const [loading, setLoading] = useState(false);

  const handleSendReports = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/mail/send-monthly-reports", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        showSuccessMessage(data.message || "Reports sent successfully.");
      } else {
        showErrorMessage(data.error || "Failed to send reports.");
      }
    } catch (err) {
      showErrorMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full px-6 py-4 shadow flex flex-col gap-4 items-center relative">
      <h1
        className={`${tektur.className} text-4xl text-orange-200 text-center`}
      >
        Premium Management
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <span className="bg-amber-600 text-orange-50 px-3 py-1 rounded-full text-sm shadow">
          Total Premium Students: {totalPremiumStudents}
        </span>

        <button
          onClick={handleSendReports}
          disabled={loading}
          className="bg-orange-700 hover:bg-orange-600 cursor-pointer duration-500 text-white px-4 py-2 rounded-full text-sm shadow disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          {loading ? "Sending…" : "Send Monthly Reports"}
        </button>
      </div>
    </header>
  );
};

export default PremiumHeader;
