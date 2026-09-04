/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure backward-compatible redirects from original clickn board urls to /blog/:id
  async redirects() {
    return [
      {
        source: '/pages/about-center',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/pages/psychological-assessment',
        destination: '/assessment',
        permanent: true,
      },
      {
        source: '/pages/counseling',
        destination: '/counseling',
        permanent: true,
      },
      {
        source: '/pages/growth-coaching',
        destination: '/coaching',
        permanent: true,
      },
      {
        source: '/pages/corporate-psychology',
        destination: '/eap',
        permanent: true,
      },
      {
        source: '/pages/business-consulting',
        destination: '/consulting',
        permanent: true,
      },
      {
        source: '/pages/pricing-hours',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/pages/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/boards/:id/view',
        destination: '/blog/:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
