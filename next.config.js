const { hostname } = require('os');
const path = require('path');

module.exports = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com', protocol: 'https' }],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: false,
};
