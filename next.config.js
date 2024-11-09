/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['i.pravatar.cc', 'vqxgzfcwifmbxwixhsxv.supabase.co']
  },
};

module.exports = nextConfig;