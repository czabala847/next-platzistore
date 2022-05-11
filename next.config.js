/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'api.escuelajs.co', 'http2.mlstatic.com', 'store.storeimages.cdn-apple.com', 'w7.pngwing.com', 'encrypted-tbn0.gstatic.com', 'placeimg.com'],
  },
};

module.exports = nextConfig;
