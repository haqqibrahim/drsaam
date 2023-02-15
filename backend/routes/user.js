const express  = require("express")

// Controller functions
const  {loginUser, signupUser, checkUp, journal, getLastThreeCheckupsByEmail} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login',loginUser)

// signup route
router.post('/signup', signupUser)

// submit checkup route
router.post('/checkup', checkUp)

// Get last 3 Checkup Route
router.post("/last_3_checkup", getLastThreeCheckupsByEmail)

// submit journal route
router.post("/journal", journal)

module.exports = router