import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: "https://6a36bc78766b831960f98239.mockapi.io",
  },
  allowedDevOrigins: ["192.168.15.13"],
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
