// Model
const MyFriend = require("../models/myFriendModel");
const jwt = require("jsonwebtoken");

// Create Token function
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

// Get MyFriend
const getMyFriend = async (req, res) => {
  const { uid } = req.body;

  try {
    const friend = await MyFriend.getMyFriend(uid);
    const friendUid = friend.uid
    res.status(200).json({friendUid})

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// Login MyFriend
const loginMyFriend = async (req, res) => {
  const { email, password } = req.body;

  try {
    const myFriend = await MyFriend.login(email, password);

    // create a token
    const token = createToken(myFriend._id);
    const uid = myFriend.uid;
    const online = myFriend.online;
    const active = myFriend.active;
    res.status(200).json({ email, uid, online, active, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const signupMyFriend = async (req, res) => {
  const { email } = req.body;
  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  const uid = randomString(
    5,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  const password = randomString(
    12,
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );

  try {
    const myFriend = await MyFriend.signup(email, password, uid);
    res.status(200).json({ myFriend });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginMyFriend, signupMyFriend, getMyFriend };
