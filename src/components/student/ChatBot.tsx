import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <FontAwesomeIcon icon={faComment} className="text-xl text-cyan-400" />

        <span className="text-cyan-500 inline-block overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[120px] transition-all duration-300 ease-in-out">
          CHAT WITH AI
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
