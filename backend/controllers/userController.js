// Model
const User = require("../models/userModel");


// login user
const loginUser = async (req, res) => {
  res.json({ mssg: "Login User" });
};

// Signup user
const signupUser = async (req, res) => {
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  const { email, username, phone, password } = req.body;
  const uid = randomString(
    5,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  try {
    const user = await User.signup(email, username, phone, password, uid);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};

module.exports = { loginUser, signupUser };
