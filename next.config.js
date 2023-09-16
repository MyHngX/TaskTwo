/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
    IMG_URL: process.env.IMG_URL,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },
};

module.exports = nextConfig;
