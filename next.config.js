/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  experimental: {
    output: "export",
  },
};

module.exports = nextConfig;
