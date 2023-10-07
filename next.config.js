module.exports = {
  images: {
    // domains: ['placehold.co'],
    unoptimized: true,

  },

  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },

  // to serve static files
  // output: 'export',
}
