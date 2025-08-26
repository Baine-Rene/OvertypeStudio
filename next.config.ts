import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // enable static export
  images: {
    unoptimized: true,    // required for Next <Image> in static mode
  },
};

export default nextConfig;
