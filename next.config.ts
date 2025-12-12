import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking the wrong monorepo/workspace root when multiple lockfiles exist on the machine.
    root: process.cwd(),
  },
};

export default nextConfig;
