"use client";
import React, { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

interface DataItem {
  label: string;
  value: number;
  color: string;
}

interface AttendancePercentage {
  subject: string;
  percentage: string;
}

const BarGraph: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (!studentId) return;

    const fetchAttendancePercentage = async () => {
      try {
        const res = await fetch(
          `/api/attendance/percentage?studentId=${studentId}`
        );
        const result: AttendancePercentage[] = await res.json();
        const graphData = result.map((item) => ({
          label: item.subject,
          value: Math.round(Number(item.percentage)),
          color: "bg-cyan-500",
        }));
        setData(graphData);
      } catch (error) {
        console.error("Error fetching attendance percentage:", error);
      }
    };

    fetchAttendancePercentage();
  }, []);

  const maxValue = Math.max(...data.map((item) => item.value), 0);
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const averageValue = Math.round(totalValue / (data.length || 1));

  const handleBarClick = (index: number) => {
    setSelectedBar(selectedBar === index ? null : index);
  };

  return (
    <div className="mx-auto bg-gradient-to-tl from-white/20 to-black/20 rounded-4xl shadow-xl border border-cyan-200 overflow-hidden">
      {/* Header */}
      <div className="bg-black/40 text-white px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-white/10 rounded-md">
            <BarChart3 size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Attendance Percentage by Subject
            </h2>
            <p className="text-slate-200 text-xs">
              Track your consistency per subject
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 px-10 min-h-[400px]">
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-full my-30 animate-pulse">
            <p>No attendance data available to display graph.</p>
          </div>
        ) : (
          <>
            <div className="bg-gray-50/5 rounded-lg p-4 min-h-[240px]">
              <div className="flex items-end justify-between gap-1 h-40 sm:h-48 md:h-56 bg-white/0 rounded-md p-2 shadow-inner overflow-x-auto">
                {data.map((item, index) => {
                  const barHeight = Math.max((item.value / maxValue) * 140, 6);
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-1 min-w-[20px] group cursor-pointer"
                      onClick={() => handleBarClick(index)}
                    >
                      <div className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200 text-black text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                        {item.value.toLocaleString()} %
                      </div>
                      <div
                        className={`w-full max-w-8 rounded-t-md shadow-md relative overflow-hidden transition-all duration-300 hover:scale-105 ${item.color}`}
                        style={{ height: `${barHeight}px` }}
                      >
                        {selectedBar === index && (
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
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      </div>
                      <div
                        className={`mt-1 text-[10px] font-medium ${
                          selectedBar === index
                            ? "text-cyan-300 font-bold"
                            : "text-gray-200"
                        }`}
                      >
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Y-axis reference */}
              <div className="flex justify-between text-[10px] text-gray-200 mt-2 px-2">
                <span>0</span>
                <span className="text-center">Average: {averageValue}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Detail panel */}
            {selectedBar !== null && data[selectedBar] ? (
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-200 text-xs text-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      {data[selectedBar].label} Details
                    </h3>
                    <p>
                      Attendance:{" "}
                      <span className="font-bold text-cyan-300">
                        {data[selectedBar].value}
                      </span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p>
                      {data[selectedBar].value >= averageValue
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
          </>
        )}
      </div>
    </div>
  );
};

export default BarGraph;
