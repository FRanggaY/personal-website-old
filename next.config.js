/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL
  },
  // api: {
  //   // Don't treat files in [lang] directory as API routes
  //   externalResolver: true,
  // },
  output: 'standalone', // enable this if using docker
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      }
    ]
  }
}

module.exports = nextConfig