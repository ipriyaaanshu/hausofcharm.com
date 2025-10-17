/** @type {import('next').NextConfig} */
// Allow overriding the base path from the environment for GitHub Pages
// Example: NEXT_PUBLIC_BASE_PATH="/hausofcharm.com"
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Ensure assets resolve correctly on GitHub Pages project site
  basePath: isProd ? basePathEnv : '',
  assetPrefix: isProd && basePathEnv ? `${basePathEnv}/` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
