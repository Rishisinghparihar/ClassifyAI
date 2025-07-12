import toast from "react-hot-toast";
import { prisma } from "./prisma";

export const logActivity = async (
  userId: string,
  userName: string,
  action: string
) => {
  await prisma.recentActivity.create({
    data: {
      userId,
      userName,
      action,
    },
  });
};



export const monthlyPlans = [
  {
    title: "Starter",
    price: 0,
    bg: "from-cyan-500 to-cyan-700",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
    ],
    extra: [
      "Bunk Manager",
      "Smart Study Plan Generator",
      "AI Doubt Solver",
      "Calendar Sync",
    ],
    popular: false,
  },
  {
    title: "Pro",
    price: 39,
    bg: "from-emerald-400 to-emerald-600",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
      "Bunk Manager",
      "Smart Study Plan Generator",
    ],
    extra: ["AI Doubt Solver", "Calendar Sync"],
    popular: true,
  },
  {
    title: "Ultimate",
    price: 99,
    bg: "from-orange-500 to-rose-500",
    features: [
      "QR Code Attendance",
      "Manual Attendance",
      "Exam & Assignment Tracker",
      "Bunk Manager",
      "Smart Study Plan Generator",
      "AI Doubt Solver",
      "Calendar Sync",
    ],
    extra: [],
    popular: false,
  },
];

export function showSuccessMessage(message: string) {
toast.dismiss();
  toast.success(message, {
    style: {
      background: "rgba(0, 0, 0, 0.5)", 
      color: "#fff",
      fontWeight: "bold",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    position: "bottom-right",
  });
}
export function showErrorMessage(message: string) {
  toast.dismiss();
  toast.error(message, {
    style: {
      background: "rgba(0, 0, 0, 0.5)",
      color: "#fff",
      fontWeight: "bold",
      backdropFilter: "blur(4px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    position: "bottom-right",
  });
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (document.getElementById("razorpay-script")) {
      return resolve(true); // Already loaded
    }

    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const eventTypeColors: Record<string, string> = {
  HOLIDAY: "bg-gradient-to-tr from-yellow-200/20 to-yellow-400/20 text-yellow-50",
  EXAM: "bg-gradient-to-tr from-red-200/20 to-red-400/20 text-red-50",
  EVENT: "bg-gradient-to-tr from-green-200/20 to-green-400/20 text-green-50",
};

export function extractJSON(rawText: string): any {
  try {
    const cleanedText = rawText.replace(/```json|```/g, "").trim();

    const start = cleanedText.indexOf("{");
    const end = cleanedText.lastIndexOf("}") + 1;

    if (start === -1 || end === -1 || end <= start) {
      console.error("Raw AI Response (unparsable):", rawText);
      throw new Error("No valid JSON block found in the response");
    }

    const jsonString = cleanedText.slice(start, end);
    return JSON.parse(jsonString);
  } catch (err) {
    console.error("❌ Failed to extract JSON:", err);
    throw new Error("AI response did not contain valid JSON");
  }
}

    export  const quoteArray = [
        {
          text: "You want something? Go get it. Period.",
          author: "~Chris Gardner",
        },
        {
          text: "I am not afraid of dying, I'm afraid of not trying.",
          author: "~Jay Z",
        },
        {
          text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "~Winston Churchill",
        },
        {
          text: "Believe you can and you're halfway there.",
          author: "~Theodore Roosevelt",
        },
        {
          text: "If they say ‘it’s impossible’, remember it’s impossible for them, not for you.",
          author: "~Jordan Belfort",
        },
        {
          text: "Success usually comes to those who are too busy to be looking for it.",
          author: "~Henry David Thoreau",
        },
      ];