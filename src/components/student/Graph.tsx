import React, { useState } from "react";
import { BarChart3 } from "lucide-react";

interface DataItem {
  label: string;
  value: number;
  color: string;
}

interface BarGraphProps {
  data?: DataItem[];
  title?: string;
  subtitle?: string;
}

const BarGraph: React.FC<BarGraphProps> = ({
  data: propData,
  title = "Analytics",
  subtitle = "Monthly performance overview",
}) => {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);

  const defaultData: DataItem[] = [
    { label: "Jan", value: 120, color: "bg-cyan-500" },
    { label: "Feb", value: 190, color: "bg-cyan-500" },
    { label: "Mar", value: 300, color: "bg-cyan-500" },
    { label: "Apr", value: 250, color: "bg-cyan-500" },
    { label: "May", value: 180, color: "bg-cyan-500" },
    { label: "Jun", value: 380, color: "bg-cyan-500" },
    { label: "Jul", value: 420, color: "bg-cyan-500" },
    { label: "Aug", value: 350, color: "bg-cyan-500" },
    { label: "Sep", value: 280, color: "bg-cyan-500" },
    { label: "Oct", value: 310, color: "bg-cyan-500" },
    { label: "Nov", value: 220, color: "bg-cyan-500" },
    { label: "Dec", value: 400, color: "bg-cyan-500" },
  ];

  const data = propData || defaultData;
  const maxValue = Math.max(...data.map((item) => item.value));
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const averageValue = Math.round(totalValue / data.length);

  const handleBarClick = (index: number) => {
    setSelectedBar(selectedBar === index ? null : index);
  };

  return (
    <div className=" mx-auto bg-gradient-to-tl from-white/20 to-black/20 rounded-4xl shadow-xl border border-cyan-200 overflow-hidden">
      {/* Header */}
      <div className="bg-black/40 text-white px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-white/10 rounded-md">
            <BarChart3 size={18} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-slate-200 text-xs">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Graph Container */}
      <div className="p-4 px-10">
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
                  {/* Tooltip */}
                  <div className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-200 text-black text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                    {item.value.toLocaleString()}
                  </div>

                  {/* Bar */}
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

                  {/* Label */}
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
            <span className="text-center">0 - {maxValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>

        {/* Details Panel */}
        {selectedBar !== null ? (
          <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-blue-200 text-xs text-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{data[selectedBar].label} Details</h3>
                <p>
                  Value:{" "}
                  <span className="font-bold text-cyan-300">
                    {data[selectedBar].value.toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p>
                  {((data[selectedBar].value / totalValue) * 100).toFixed(1)}% of total
                </p>
                <p>
                  {data[selectedBar].value > averageValue ? "Above" : "Below"} average
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
