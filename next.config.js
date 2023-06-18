/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "randomuser.me/api/",
    //     port: "",
    //     pathname: "/api/portraits/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
