"use client";
import { useState } from "react";

interface Subject {
  id: string;
  name: string;
}

interface SubjectSelectorProps {
  subjects: Subject[];
}

export default function SubjectSelector({ subjects }: SubjectSelectorProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  return (
    <div className="w-72 mx-auto font-raleway">
      {/* Label */}
      <label
        htmlFor="subject"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Subject
      </label>

      {/* Custom Dropdown */}
      <div className="relative cursor-pointer group">
        {/* Title */}
        <div className="w-full bg-gray-400 text-white text-center px-4 py-2 rounded-md group-hover:rounded-t-md transition">
          {selectedSubject
            ? subjects.find((s) => s.id === selectedSubject)?.name
            : "Select Subject"}
        </div>

        {/* Options */}
        <div className="absolute top-0 w-full pt-10 max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
          {subjects.map((s, idx) => (
            <label key={s.id} className="block">
              <input
                type="radio"
                name="subject"
                value={s.id}
                checked={selectedSubject === s.id}
                onChange={() => setSelectedSubject(s.id)}
                className="hidden"
              />
              <span
                className={`block w-full text-center px-4 py-2 cursor-pointer text-white bg-gray-400 hover:bg-gray-300 transition 
                ${
                  selectedSubject === s.id
                    ? "bg-green-400 absolute top-0 rounded-md group-hover:rounded-none"
                    : ""
                }
                ${
                  idx === subjects.length - 1 && selectedSubject === s.id
                    ? "rounded-b-md"
                    : ""
                }`}
              >
                {s.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
