import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "popgas.com.br",
      },
      {
        protocol: "https",
        hostname: "*.wp.com",
      },
    ],
  },
};

export default nextConfig;
