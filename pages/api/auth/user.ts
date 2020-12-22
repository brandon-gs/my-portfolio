import withSession from "utils/session";

export default withSession(async (req, res) => {
  try {
    const user = req.session.get("user");

    if (user) {
      res.status(200).json({
        isLoggedIn: true,
      });
    } else {
      res.status(200).json({
        isLoggedIn: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      error: true,
      isLoggedIn: false,
    });
  }
});
