import User from "../model/User.js";

export const registerUser = async (req, res) => {
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required.",
      });
    }
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registerUser = await User.register(newUser, password);
  } catch (err) {
    res.send("Some error : ", err.message);
  }
};

export const logout = (req, res) => {
  req.logout((e) => {
    if (e) {
      alert(e.data.message);
    }
    res.redirect("/holding");
  });
};
