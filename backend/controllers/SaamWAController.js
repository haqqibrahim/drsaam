// Import Models
const UsersWA = require("../Models/UsersWA.js");

// Import Functions
const { SaveChatsWA } = require("../Functions/SaveChatsWADB.js");
const { saveMemory } = require("../Functions/SaveMemoryWADB.js");
const { Saam } = require("../Functions/Saam.js");
// Receive Messages from WhatsApp
exports.receiveMessageWA = async (req, res) => {
  // Destructing the message and sender's number
  let message = req.body.Body;
  let userNumber = req.body.From;

  //Checking if user exists
  const exisitingNumber = await UsersWA.findOne({ userNumber });
  if (!exisitingNumber) {
    console.log(`Creating new user: ${userNumber}`);
    const userWA = new UsersWA({ userNumber });
    await userWA.save();
    console.log(`New user created: ${userWA}`);
  }
  console.log(`This user exists!!`);
  // Save User's message to chatDB
  await SaveChatsWA(exisitingNumber._id, "User", message);
  // Save User's Message to MemoryDB
  await saveMemory(exisitingNumber._id, "user", message);
  // Call Saam - AI
  await Saam(exisitingNumber._id, userNumber);
};
