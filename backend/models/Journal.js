const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const journalSchema = new Schema({
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString()
  },
  time: {
    type: String,
    default: new Date().toLocaleTimeString()
  },
  journal: {
    type: String
  }
});

module.exports = mongoose.model("journal", journalSchema)
