// next.config.js
module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    swcMinify: true, // SWC for minifying JavaScript up to 7x faster in next12 beta
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com", "unsplash.com"],
    },
    async redirects() {
        return [
            {
                source: "/workshop",
                destination:
                    "https://www.notion.so/15329b1441d34f92ac5a44548ed9950d?v=7494f390fea64f72b9a04e073d261b79",
                permanent: false,
            },
        ];
    },
};
