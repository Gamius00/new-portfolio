/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hits.sh",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
