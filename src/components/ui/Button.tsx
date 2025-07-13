import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "rounded px-3 py-1 text-sm font-medium shadow transition-all duration-300",
        size === "sm" && "px-2 py-1 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        size === "lg" && "px-4 py-2 text-base",
        variant === "primary" &&
          "bg-orange-600 text-white hover:bg-orange-700",
        variant === "secondary" &&
          "bg-orange-100 text-orange-800 hover:bg-orange-200",
        variant === "destructive" &&
          "bg-red-600 text-white hover:bg-red-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
