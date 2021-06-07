const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  dir: "./client",
  target: "serverless",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/en/projects",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/en/contact",
        permanent: true,
      },
      {
        source: "/projects/job-system",
        destination: "/en/projects/job-system",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: "./client/tsconfig.json",
          baseUrl: "./client/",
        })
      );
    } else {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          configFile: "./client/tsconfig.json",
          baseUrl: "./client/",
        }),
      ];
    }
    return config;
  },
};
