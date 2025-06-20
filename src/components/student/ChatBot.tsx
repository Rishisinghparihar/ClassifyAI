import { useRouter } from "next/navigation";
import React from "react";

const ChatBot = () => {
    const router = useRouter();
  return (
    <div
      className="absolute bottom-14 right-4 group cursor-pointer"
      onClick={() => router.push("/dashboard/student/chat")}
    >
      <div className="flex items-center justify-center h-10 px-3 rounded-full bg-cyan-50/10 hover:bg-cyan-100/20  font-medium text-sm shadow transition-all duration-300 space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-cyan-300"
          fill="currentColor"
        >
          <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
        </svg>

        <span className="text-cyan-500 inline-block overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[120px] transition-all duration-300 ease-in-out">
          CHAT WITH AI
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
