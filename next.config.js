/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "unsplash.com",
            "source.unsplash.com",
            "images.ctfassets.net",
            "images.unsplash.com",
        ],
    },
}

module.exports = nextConfig
