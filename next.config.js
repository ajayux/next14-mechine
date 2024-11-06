/** @type {import('next').NextConfig} */
const nextConfig = {
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, 'src/styles')],
  //     prependData: `@import "variables.scss";`,
  // },
  images:{
    domains: ['placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // This is your other domain
      },
    ],
  }
}

module.exports = nextConfig
