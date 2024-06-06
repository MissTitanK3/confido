/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com/photo-:id',
      'res.cloudinary.com',
      'play.vidyard.com'
    ],
  },
};

export default nextConfig;
