const dev = process.env.NODE_ENV !== "production";

const prefix = "";

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  assetPrefix: !dev ? prefix : "",
  basePath: !dev ? prefix : "",
  env: {
    ASSET_PREFIX: !dev ? prefix : "",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
