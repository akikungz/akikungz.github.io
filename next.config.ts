import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
