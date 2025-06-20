"use client";
import Logo from "@/components/apps/Logo";
import React, { useState } from "react";
import { SendHorizonal, UserRound } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I'm here to help you with your academic doubts. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Simulate bot response or call API here
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen w-full px-4 py-6 text-white">
      {/* Chat Box */}
      <div className="flex-1 flex items-center justify-center w-full max-w-[95rem] px-4">
        <div className="w-full h-[90vh] rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-4 flex flex-col justify-between chat-box-glow">
          {/* Header inside the box */}
          <div className="flex flex-col items-center mb-4">
            <Logo />
          </div>
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto space-y-4 p-2 pr-2 scrollbar-thin scrollbar-thumb-cyan-500/30">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Avatar with optional overlay icon */}
                <div className="relative shrink-0 w-8 h-8">
                  <Image
                    src="/only-logo.png"
                    alt={msg.sender === "bot" ? "Bot" : "You"}
                    width={32}
                    height={32}
                    className="rounded-full border border-white/10 object-cover"
                  />
                  {msg.sender === "user" && (
                    <div className="absolute -bottom-1 -right-1 bg-cyan-600 rounded-full p-0.5">
                      <UserRound size={12} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[70%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-cyan-500/20 text-white border border-cyan-300/30"
                      : "bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="mt-4 flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask your doubt here..."
              className="flex-1 bg-transparent outline-none text-white placeholder-white/50"
            />
            <button
              onClick={handleSend}
              className="text-cyan-300 hover:text-white transition-colors"
            >
              <SendHorizonal size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
