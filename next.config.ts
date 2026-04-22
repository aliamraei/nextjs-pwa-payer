// next.config.mjs
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <--- خروجی استاتیک
  reactStrictMode: true,
  images: {
    unoptimized: true, // برای export ضروری است
  },
};

export default withPWA(nextConfig);
