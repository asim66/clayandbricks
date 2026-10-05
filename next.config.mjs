/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85, 92, 95],
  },
  async redirects() {
    return [
      {
        source: '/interior-designing-company-in-bhubaneswar',
        destination: '/services/interior-design-bhubaneswar',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'host', value: 'www.clayandbricks.com' }],
        destination: 'https://clayandbricks.com',
        permanent: true,
      },
      {
        source: '/:path+',
        has: [{ type: 'host', value: 'www.clayandbricks.com' }],
        destination: 'https://clayandbricks.com/:path+',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
