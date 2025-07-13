import React from "react";

const SearchFilterBar = ({
  onSearch,
  onFilter,
  currentFilter,
}: {
  onSearch: (term: string) => void;
  onFilter: (plan: string) => void;
  currentFilter: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 mb-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or email…"
        onChange={(e) => onSearch(e.target.value)}
        className="px-3 py-2 w-full md:w-1/3 rounded border border-orange-400 bg-orange-50/10 text-orange-100 placeholder-orange-300 outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Filter */}
      <div className="flex gap-2 flex-wrap">
        {["All", "Pro", "Ultimate", "Expired"].map((plan) => (
          <button
            key={plan}
            onClick={() => onFilter(plan)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
              currentFilter === plan
                ? "bg-orange-600 text-orange-50 border-orange-600"
                : "border-orange-400 text-orange-100 hover:bg-orange-600/20"
            }`}
          >
            {plan}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilterBar;
