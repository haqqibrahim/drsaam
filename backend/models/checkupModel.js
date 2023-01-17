const mongoose = require("mongoose");
var moment = require('moment');
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
  datetime: {
    type: Date,
    default: new Date().toUTCString()
  },

  user: {
    type: String
  }
});

module.exports = mongoose.model("Checkup", checkupSchema);
