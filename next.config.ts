import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Personal-Portfolio",
  distDir: "out",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
