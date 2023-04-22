require('dotenv').config()

const express = require('express')
const cors = require('cors')
const PORT  = process.env.PORT || 5000

const SaamRoute = require('./routes/saam')

// express app
const app = express()
app.set("port", PORT)
// middleware
app.use(express.json())
app.use(cors())


// routes
app.get("/", (req,res) => {
  res.send("Hello Saam my AI")
})

app.use("/saam", SaamRoute)

 app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})