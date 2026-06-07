/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [], // Agrega los dominios de imágenes externos que uses
    unoptimized: process.env.NODE_ENV === 'development'
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig