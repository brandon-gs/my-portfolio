import path from "path";

export const favicon = (_, res) => {
  const faviconOptions = {
    root: path.join(__dirname, "../../client/public/"),
  };
  return res.status(200).sendFile("favicon.ico", faviconOptions);
};
