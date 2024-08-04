const User = require("./model");



const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new user
    const user = await User.create({ username, email, password });

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      username: req.user.username,
    };
    res.status(201).json({ message: "You have logged in succesfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  signup,
  login,
};
