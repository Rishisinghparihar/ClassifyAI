import Image from "next/image";
import React from "react";

const Logo = ({
  width = 200,
  height = 100,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div>
      <Image src={"/logo-nobg.png"} alt="logo" width={width} height={height} />
      {/* <Image src={"/logo-nobg.png"} alt="logo" width={200} height={100} /> */}
    </div>
  );
};

export default Logo;
