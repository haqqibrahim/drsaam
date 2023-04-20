require('dotenv').config()

const express = require('express')
const cors = require('cors')
const PORT  = process.env.PORT || 5000

const SaamRoute = require('./routes/saam')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())


// routes
app.get("/", (req,res) => {
  res.send("Hello Saam")
})

app.use("/saam", SaamRoute)

 app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})