const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const myFriendSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  user: {
    type: String,
  },
});

// Static signup method
myFriendSchema.statics.signup = async function (email, password, uid) {
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  const exist = await this.findOne({ email });
  const testUid = await this.findOne({ uid });
  if (exist) {
    throw Error("Email already exist");
  }

  if (testUid) {
    throw Error("Uid already exist");
  }

  const myFriend = await this.create({
    email,
    password,
    uid,
    online: false,
    active: false,
  });

  return myFriend;
};

// static login method
myFriendSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled!!");
  }

  const myFriend = await this.findOne({ email });

  if (!myFriend) {
    throw Error("hmm, this email is incorrect");
  }

  if (myFriend.password !== password) {
    throw Error("Oops, incorrect password");
  }

  const friend = await this.findOneAndUpdate({ email }, { online: true });
  const friendDetails = await this.findOne({ email });

  return friendDetails;
};

myFriendSchema.statics.getMyFriend = async function (uid) {
  const friends = await this.find({ online: true });
  const rand = (Math.random() * friends.length) | 0;
  const friend = friends[rand];
  const email = friend.email;
 await this.findOneAndUpdate({ email }, { user: uid });

  console.log(friend);
  return friend;
};

module.exports = mongoose.model("My-Friend", myFriendSchema);
