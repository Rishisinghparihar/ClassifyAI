import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-5 gap-2">
      <Image
        src={"/only-logo.png"}
        width={80}
        height={80}
        className="invert"
        alt="LOGO..."
      />
      <span className="text-4xl">
        Classify <span className="text-orange-700 -ml-2">AI</span>
      </span>
    </div>
  );
};

export default Logo;
