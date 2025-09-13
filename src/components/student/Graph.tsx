"use client";
import React, { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

interface AttendancePercentage {
  subject: string;
  percentage: number;
}

const BarGraph: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [attendanceData, setAttendanceData] = useState<AttendancePercentage[]>([]);

  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/attendance/percentage?studentId=${studentId}`);
        const result: AttendancePercentage[] = await res.json();

        // Ensure percentage is a rounded number
        const formatted = result.map((item) => ({
          subject: item.subject,
          percentage: Math.round(Number(item.percentage)),
        }));

        setAttendanceData(formatted);
      } catch (err) {
        console.error("Error loading attendance graph data:", err);
      }
    };

    fetchData();
  }, []);

  const maxValue = Math.max(...attendanceData.map((item) => item.percentage), 0);
  const total = attendanceData.reduce((acc, item) => acc + item.percentage, 0);
  const average = attendanceData.length ? Math.round(total / attendanceData.length) : 0;

  const handleClick = (index: number) => {
    setSelectedBar(selectedBar === index ? null : index);
  };

  return (
    <div className="mx-7 bg-gradient-to-tl from-white/20 to-black/20 rounded-4xl shadow-xl border border-cyan-200 overflow-hidden w-100 ">
      {/* Header */}
      <div className="bg-black/40 text-white px-2 py-3">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-white/10 rounded-md">
            <BarChart3 size={18} />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Attendance Percentage by Subject</h2>
            <p className="text-slate-200 text-xs">Track your consistency per subject</p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="p-3 px-7 h-[165px]">
        <div className="bg-gray-50/5 rounded-lg p-[2.5rem] min-h-[240px]">
          <div className="flex items-end justify-between gap-1 h-40 sm:h-48 md:h-56 rounded-md p-2 shadow-inner overflow-x-auto">
            {attendanceData.map((item, index) => {
              const value = item.percentage;
              const height = Math.max((value / 100) * 140, 6);
              const isSelected = selectedBar === index;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center flex-1 min-w-[20px] group cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  {/* Tooltip */}
                  <div className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200 text-black text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                    {value}%
                  </div>

                  {/* Bar */}
                  <div
                    className="w-full max-w-8 rounded-t-md shadow-md relative overflow-hidden transition-all duration-300 bg-cyan-500"
                    style={{ height: `${height}px` }}
                  >
                    {isSelected && (
                      <div
                        className="absolute inset-0 opacity-50"
                        style={{
                          backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 4px,
                            rgba(255,255,255,0.8) 4px,
                            rgba(255,255,255,0.8) 8px
                          )`,
                        }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div
                    className={`mt-1 text-[10px] font-medium ${
                      isSelected
                        ? "text-cyan-300 font-bold"
                        : "text-gray-200"
                    }`}
                  >
                    {item.subject}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Y-axis */}
          <div className="flex justify-between text-[10px] text-gray-200 mt-2 px-2">
            <span>0%</span>
            <span className="text-center">Average: {average}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Details Panel */}
        {selectedBar !== null && attendanceData[selectedBar] !== undefined ? (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-200 text-xs text-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{attendanceData[selectedBar].subject} Details</h3>
                <p>
                  Attendance:{" "}
                  <span className="font-bold text-cyan-300">
                    {attendanceData[selectedBar].percentage}%
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p>
                  {attendanceData[selectedBar].percentage >= average
                    ? "Above"
                    : "Below"}{" "}
                  average
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-200 text-xs text-gray-200">
            <h4 className="font-semibold mb-1">Instructions:</h4>
            <p>Click on any bar to watch detailed information.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarGraph;
