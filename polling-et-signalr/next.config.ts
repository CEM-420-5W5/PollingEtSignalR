import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/polling',
        permanent: false
      },
    ];
  },
};
