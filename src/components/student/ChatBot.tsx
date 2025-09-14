import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const ChatBot = () => {
  const router = useRouter();
  return (
    <div
      className="absolute bottom-60 right-10 group cursor-pointer"
      onClick={() => router.push("/dashboard/student/chat")}
    >
      <div className="flex flex-col items-center justify-center h-10 px-2 rounded-full shadow space-x-2 ">
        <FontAwesomeIcon icon={faComment} className="text-xl text-cyan-400" />

        <span className="rounded ease-in-out text-xs bg-cyan-500 text-white opacity-0 p-[2px] mt-2 group-hover:opacity-100 scale-80 group-hover:scale-100 transition-all duration-200 pointer-events-none">
          Chat with AI
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
