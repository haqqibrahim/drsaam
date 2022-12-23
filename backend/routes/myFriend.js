const express = require("express")

// Controller Function
const {loginMyFriend, signupMyFriend, getMyFriend} = require("../controllers/myFriendController")

const router = express.Router()

// Login Route
router.post('/login', loginMyFriend)
router.post('/signup', signupMyFriend)
router.post("/getmyfriend", getMyFriend)

module.exports = router