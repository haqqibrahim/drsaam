// Model
const User = require("../models/userModel");
const Checkup = require("../models/checkupModel");
const Journal = require("../models/Journal");
const jwt = require("jsonwebtoken");

// Create Token function
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

// Submit Journal
const journal = async (req, res) => {
  const { email, journal } = req.body;

  try {
    const newJournal = new Journal({
      email,
      journal,
    });
    await newJournal.save();
    console.log(newJournal);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Get last 3 Checkup
const getLastThreeCheckupsByEmail = async (req, res) => {
  const user = req.body.email;

  try {
    const checkupCount = await Checkup.countDocuments({ user });
    if(checkupCount < 1) {
        res.status(200).json({ message: "No checkup data available for this user"});
    } else {
        const checkups = await Checkup.find({user}).sort({createdAt: -1}).limit(3);
        res.status(200).json({ checkups });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}


// Submit Checkup
const checkUp = async (req, res) => {
  const { checkupA, checkupB, checkupC, checkupD, cause, how, user } = req.body;

  try {
    const checkup = new Checkup({
      checkupA,
      checkupB,
      checkupC,
      checkupD,
      cause,
      how,
      user,
    });
    await checkup.save();
    console.log(checkup);
    res.status(200).json({ checkup });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    const uid = user.uid;
    const username = user.username;
    res.status(200).json({ email, username, uid, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
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
    const token = createToken(user._id);
    res.status(200).json({ email, username, uid, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  checkUp,
  journal,
  getLastThreeCheckupsByEmail,
};
