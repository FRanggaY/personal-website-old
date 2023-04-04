/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // enable experimental
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  }
}

module.exports = nextConfig