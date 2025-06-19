"use client";
import { HorizontalBarProps } from "@/lib/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HorizontalBar: React.FC<HorizontalBarProps> = (props) => {
  return (
    <div className=" flex w-full max-w-md mx-auto my-2 p-4  to-black/20 bg-gradient-to-tl from-white/20 border border-cyan-300 rounded-4xl shadow-lg">
      <div className="flex  w-80  flex-col items-start justify-between p-4 rounded-lg">
        <p className="text-amber-50 text-lg ">{props.title}</p>
        <span className="text-gray-100">{props.content}</span>
      </div>
      <div className="flex items-center justify-center w-16 h-full">
      <Link
        href={props.linkRef}
        className="h-6 w-6   text-cyan-500  flex items-center justify-center text-center border border-cyan-300  rounded-full hover:bg-cyan-500/65 transition-colors duration-200 shadow-md"
      >
        <ChevronRight />
      </Link>
      </div>
    </div>
  );
};

export default HorizontalBar;
