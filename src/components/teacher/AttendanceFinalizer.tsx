"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function AttendanceFinalizer({ token, onClose }: { token: string; onClose: () => void; }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isLoading, setIsLoading] = useState(false);

  // Countdown Timer Logic
  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleFinalize = async () => {
    setIsLoading(true);
    toast.loading("Finalizing attendance...");
    try {
        const response = await fetch('/api/attendance/finalize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });
        const data = await response.json();
        toast.dismiss();
        if (!response.ok) throw new Error(data.message);
        toast.success(data.message);
        setTimeout(onClose, 2000);
    } catch (err: any) {
        toast.dismiss();
        toast.error(err.message || "An error occurred.");
        setIsLoading(false);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isTimeUp = timeLeft === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Attendance Session Live</h2>
        <p className="text-gray-600 mb-6">
          QR codes sent. Students have 10 minutes to scan.
        </p>
        <div className="my-8">
            {isTimeUp ? (
                <p className="text-3xl font-bold text-green-600">Time's Up!</p>
            ) : (
                <p className="text-5xl font-mono font-bold text-indigo-600">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </p>
            )}
            <p className="text-gray-500 mt-2">Time remaining</p>
        </div>
        <button
            onClick={handleFinalize}
            disabled={!isTimeUp || isLoading}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-indigo-700"
        >
            {isLoading ? 'Processing...' : "Mark Remaining Students as Absent"}
        </button>
        <button onClick={onClose} className="mt-2 text-sm text-gray-500 hover:underline">
            Close
        </button>
      </div>
    </div>
  );
}