import React from "react";

const NoInternetPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black/10 text-white text-center p-6">
      <div>
        <h1 className="text-5xl font-bold mb-4">🚫 No Internet Connection</h1>
        <p className="text-3xl">Please check your network and try again.</p>
      </div>
    </div>
  );
};

export default NoInternetPage;
