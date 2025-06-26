import toast from "react-hot-toast";

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
