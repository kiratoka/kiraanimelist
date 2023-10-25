/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "www.crunchyroll.com"
            }
        ]
    }
}

module.exports = nextConfig
