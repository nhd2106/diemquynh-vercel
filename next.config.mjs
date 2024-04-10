/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        pathname: "dl54o5pzx/image/upload/*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
