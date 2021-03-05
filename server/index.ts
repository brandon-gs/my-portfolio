import app from "./app";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({
  dir: "./client",
  dev,
  conf: {
    future: {
      excludeDefaultMomentLocales: false,
      strictPostcssConfiguration: false,
      webpack5: false,
    },
    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
    },
  },
});
const handler = nextApp.getRequestHandler();

(async () => {
  try {
    await nextApp.prepare();

    app.get("*", (req, res) => {
      return handler(req, res);
    });
    app.listen(app.get("port"));
    console.log(`>> Server on port ${app.get("port")}`);
  } catch (error) {
    console.log(">> Error to start the server");
    console.log(error);
  }
})();
