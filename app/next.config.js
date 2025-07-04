/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['nodemailer']
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com']
  }
}

module.exports = nextConfig
