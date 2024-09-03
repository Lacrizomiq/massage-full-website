/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: "crypto-browserify",
        stream: "stream-browserify",
        util: "util/",
      };
    }
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
