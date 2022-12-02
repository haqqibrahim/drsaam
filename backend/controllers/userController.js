// Model
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

// Create Token function
const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, {
    expiresIn: "3d"
  })
}

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

    // create a token
    const token = createToken(user._id)
    res.status(200).json({ email, token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
