import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://classify-ai-psi.vercel.app/api/:path*",
      },
    ];
  },
  devIndicators: false
};

export default nextConfig;
