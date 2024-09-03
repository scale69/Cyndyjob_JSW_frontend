/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: process.env.IMG_HOST,
          },
        ],
      },
};

export default nextConfig;
