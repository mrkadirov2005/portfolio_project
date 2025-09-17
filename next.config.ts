import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ Do not run ESLint during builds (useful for Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
