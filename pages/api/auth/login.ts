import withSession from "utils/session";

export default withSession(async (req, res) => {
  const { username, password } = await req.body;
  try {
    const usernameMatch = username === process.env.ADMIN_USER;
    const passwordMatch = password === process.env.ADMIN_PASSWORD;
    if (usernameMatch && passwordMatch) {
      const user = { isLoggedIn: true };
      req.session.set("user", user);
      await req.session.save();
      res.status(200).json(user);
    } else {
      const user = { isLoggedIn: false };
      res.status(200).json(user);
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
