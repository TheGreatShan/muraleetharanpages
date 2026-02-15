/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            }
        ],
    },
};

export default nextConfig;
