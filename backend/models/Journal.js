const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const journalSchema = new Schema({
  email: {
    type: String,
  },
  datetime: {
    type: Date,
    default: new Date().toUTCString()
  },
  journal: {
    type: String
  }
});

module.exports = mongoose.model("journal", journalSchema)
