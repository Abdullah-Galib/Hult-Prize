/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Self-hosted @fontsource files (imported in app/layout.tsx) must be traced
    // into the serverless output — otherwise the CSS ships but the woff2 files
    // 404 on serverless platforms like Vercel. (Top-level — and stable — key
    // from Next 15 onward.)
    outputFileTracingIncludes: {
      '/**': ['./node_modules/@fontsource/**'],
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
