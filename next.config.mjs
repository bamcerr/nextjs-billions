/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'undefined',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'specials-images.forbesimg.com',
        port: '',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;
