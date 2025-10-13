import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: [
            '@phosphor-icons/react',
            '@icons-pack/react-simple-icons',
        ],
    },
}

export default nextConfig
