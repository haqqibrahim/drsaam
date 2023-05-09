var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
var request = require("request");

const client = require("twilio")(accountSid, authToken, {
  lazyLoading: true,
});

// Function to send message to WhatsApp
const sendMessage = async (message, senderID) => {
  try {
    var options = {
      method: "POST",
      url: "https://api.ultramsg.com/instance46339/messages/chat",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      form: {
        token: process.env.ULTRA_MSG_TOKEN,
        to: senderID,
        body: message,
        priority: "10",
        referenceId: "",
      },
    };
    await request(options, (error, response, body) => {
      if (error) {
        console.log(`Error at sendMessage Request --> ${error}`);
      }
      console.log(body);
    });
  } catch (error) {
    console.log(`Error at sendMessage --> ${error}`);
  }
};

module.exports = {
  sendMessage,
};
