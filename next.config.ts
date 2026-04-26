import NextPwa from "next-pwa";

const withPWA = NextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {},
};

// @ts-ignore
export default withPWA(nextConfig);
