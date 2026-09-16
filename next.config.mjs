/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 92, 95],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.clayandbricks.com' }],
        destination: 'https://clayandbricks.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
