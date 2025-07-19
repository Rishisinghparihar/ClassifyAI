"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faLightbulb,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const InsightsPanel = () => {
  const [data, setData] = useState<{ risks: string[]; insights: string[] }>({
    risks: [],
    insights: [],
  });

  useEffect(() => {
    const fetchInsights = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/event/insights`);
      const json = await res.json();
      if (json.success) setData({ risks: json.risks, insights: json.insights });
    };
    fetchInsights();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Planning Risk Assessment */}
      <div className="bg-red-50/10 border border-red-500 p-4 rounded-xl text-red-300">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-400" />
          Planning Risk Assessment
        </h2>
        <div className="max-h-28 scrollbar-hide overflow-y-auto pr-2 space-y-1">
          {data.risks.length > 0 ? (
            <ul className="space-y-1">
              {data.risks.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          ) : (
            <p>✅ No significant risks detected</p>
          )}
        </div>
      </div>

      {/* Intelligent Suggestions */}
      <div className="bg-blue-50/10 border border-blue-500 p-4 rounded-xl text-blue-300">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FontAwesomeIcon icon={faLightbulb} className="text-blue-400" />
          Intelligent Suggestions
        </h2>
        <div className="max-h-64 overflow-y-auto pr-2 space-y-1">
          {data.insights.length > 0 ? (
            <ul className="space-y-1">
              {data.insights.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          ) : (
            <p>
              <FontAwesomeIcon
                icon={faCheckDouble}
                className="text-blue-400 mr-2"
              />
              All good — no suggestions at this time
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
