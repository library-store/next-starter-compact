/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://localhost:3000',
  generateRobotsTxt: true,
  images: {
    quality: 100, // Set a quality by % for all images
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
};
