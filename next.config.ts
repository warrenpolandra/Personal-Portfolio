import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  distDir: "out",
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
