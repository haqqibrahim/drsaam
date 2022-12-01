const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
});

// Static signup method
userSchema.statics.signup = async function (
  email,
  username,
  phone,
  password,
  uid
) {
  const emailExists = await this.findOne({ email });
  const usernameExists = await this.findOne({ username });
  const phoneExists = await this.findOne({ phone });

  if (emailExists) {
    throw Error("oops, email already exist");
  }
  if (usernameExists) {
    throw Error("Yikes, username already exist");
  }
  if (phoneExists) {
    throw Error("oops, phone number already exist");
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    username,
    phone,
    uid,
    password: hash,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
