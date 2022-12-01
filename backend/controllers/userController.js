// Model
const User = require("../models/userModel")

// login user
const loginUser = async (req, res) => {
    res.json({mssg: "Login User"})
}


// Signup user
const signupUser = async (req, res) => {
    res.json({mssg: "Signup User"})
}


module.exports = {loginUser, signupUser}