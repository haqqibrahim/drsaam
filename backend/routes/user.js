const express  = require("express")

// Controller functions
const  {loginUser, signupUser, checkUp} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login',loginUser)

// signup route
router.post('/signup', signupUser)

// submit checkup route
router.post('/checkup', checkUp)

module.exports = router