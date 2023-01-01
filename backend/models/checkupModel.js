const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const checkupSchema = new Schema({
  checkupA: {
    type: String,
  },
  checkupB: {
    type: String
  },
  checkupC: {
    type: String
  },
  checkupD: {
    type: String
  },
  cause: {
    type: String,
  },
  how: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date().toLocaleDateString()
  },
  time: {
    type: Date,
    default: new Date().toLocaleTimeString()
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model("Checkup", checkupSchema);
