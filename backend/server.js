require('dotenv').config()

// Import Deps
const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const PORT  = process.env.PORT || 5000


const SaamRoute = require('./routes/saam')
const UserRoute = require("./routes/UserRoute")
const JournalRoute = require("./routes/JournalRoute")
const SaamWARoute = require("./routes/SaamWARoute")

// express app
const app = express()
app.set("port", PORT)

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

// Set up MongoDB connection
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// routes
app.get("/", (req,res) => {
  res.send("Hello Saam my AI")
})

app.use("/saam", SaamRoute)
app.use("/user", UserRoute)
app.use("/user", JournalRoute)
app.use("/whatsapp", SaamWARoute)


 app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})