const dev = process.env.NODE_ENV !== "production";

const prefix = "/portfolio";

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  assetPrefix: !dev ? prefix : "",
  basePath: !dev ? prefix : "",
  env: {
    ASSET_PREFIX: !dev ? prefix : "",
    ADMIN_USER: !dev ? process.env.ADMIN_USER : "admin_user",
    ADMIN_PASSWORD: !dev ? process.env.ADMIN_PASSWORD : "admin_password",
    JWT_SECRET: !dev ? process.env.JWT_SECRET : "jwt_secret",
    SECRET_COOKIE_PASSWORD: !dev
      ? process.env.SECRET_COOKIE_PASSWORD
      : "2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8",
  },
};
