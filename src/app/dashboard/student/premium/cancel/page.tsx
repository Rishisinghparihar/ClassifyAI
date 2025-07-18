"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(50);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/premium");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <XCircle className="text-red-500 w-16 h-16 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Payment Failed
        </h1>
        <p className="text-gray-600 mt-2">
          Unfortunately, your payment could not be processed. Please check your
          payment details and try again.
        </p>

        <p className="text-gray-600 mt-2">
          Redirecting in <span className="font-semibold">{countdown}</span>{" "}
          second{countdown !== 1 && "s"}…
        </p>
      </div>
    </div>
  );
};

export default Page;
