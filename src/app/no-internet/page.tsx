import { Unplug } from "lucide-react";
import React from "react";

const NoInternetPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Unplug size={64} className="text-red-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          No Internet Connection
        </h1>
        <p className="text-lg md:text-2xl text-white/80">
          Please check your network.
        </p>
      </div>
    </div>
  );
};

export default NoInternetPage;
