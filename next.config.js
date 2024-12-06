/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
        },
        {
          protocol: 'https',
          hostname: 'github-readme-activity-graph.vercel.app',
        },
        {
          protocol: 'https',
          hostname: 'github-readme-streak-stats.herokuapp.com',
        },
      ],
    },
  };
  
  
  