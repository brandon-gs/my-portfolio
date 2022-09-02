const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  trailingSlash: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: true,
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
