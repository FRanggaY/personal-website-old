/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
            }, // for localhost
            {
                protocol: 'https',
                hostname: 'personalportfolioapi.franciscusrangga.com'
            }, // trusted https only // add this for http
        ],
    },
};

export default nextConfig;
