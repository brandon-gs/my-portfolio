const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  dir: "./client",
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
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
