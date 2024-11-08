/** @type {import('next').NextConfig} */
const nextConfig = {
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, 'src/styles')],
  //     prependData: `@import "variables.scss";`,
  // },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elements-resized.envatousercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // This is your other domain
      },
    ],
  }
}

module.exports = nextConfig
