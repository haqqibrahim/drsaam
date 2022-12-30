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
  datetime: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String
  }
});

module.exports = mongoose.model("Checkup", checkupSchema);
