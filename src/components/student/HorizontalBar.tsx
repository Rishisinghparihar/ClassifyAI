"use client";
import { HorizontalBarProps } from "@/lib/types";
import Link from "next/link";
import React from "react";


const HorizontalBar: React.FC<HorizontalBarProps> = (props) => {
  return (
    <div className=" flex w-full max-w-md mx-auto my-4 p-4  to-black/20 bg-gradient-to-tl from-white/20 border border-cyan-300 rounded-4xl shadow-lg">
      <div className="flex  w-80  flex-col items-start justify-between p-4 rounded-lg">
        <p className="text-amber-50 ">{props.title}</p>
        <span className="text-gray-100">{props.content}</span>
      </div>
      <Link
        href={props.linkRef}
        className="text-blue-500 flex items-center justify-center  hover:underline mt-2"
      >{props.linkRef}</Link>
    </div>
  );
};

export default HorizontalBar;
