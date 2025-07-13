import React from "react";
import clsx from "clsx";

const Badge = ({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline";
}) => {
  return (
    <span
      className={clsx(
        "inline-flex px-2 py-1 rounded-full text-xs font-medium",
        variant === "default" &&
          "bg-orange-600 text-orange-50",
        variant === "destructive" &&
          "bg-red-600 text-red-50",
        variant === "outline" &&
          "border border-orange-600 text-orange-600"
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
