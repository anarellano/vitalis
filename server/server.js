const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodeMailer = require("nodemailer");
const Message = require("../models/Message.js");

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing (CORS)

const mongoose = require("mongoose");

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://localhost:27017/vitalisStaffingDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setup the email transporter using Nodemailer.
// This will be used to send emails.
function setupTransporter() {
  return nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "anton@vitalisstaffing.com",
      pass: "put your password here", // Remember to keep this secure!
    },
  });
}

// Function to send an email using the transporter and provided details.
function sendEmail(transporter, to, subject, text) {
  const mailOptions = {
    from: "anton@vitalisstaffing.com",
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error", error);
      return false;
    } else {
      console.log("Email Sent!", info.response);
      return true;
    }
  });
}

// Endpoint to handle form submissions from the frontend.
app.post("/sendMessage", async (req, res) => {
  try {
    // Save the form data to the MongoDB database
    const message = new Message(req.body);
    await message.save();

    // Setup the email transporter
    const transporter = setupTransporter();

    // Construct the email content using the form data
    const emailContent = `
    First Name: ${req.body.firstName}
    Last Name: ${req.body.lastName}
    Email: ${req.body.email}
    Phone Number: ${req.body.phoneNumber}
    Message: ${req.body.message}
    `;

    // The recipient email address
    const adminEmail = "anton@vitalisstaffing.com";

    // Send the email
    if (sendEmail(transporter, adminEmail, "New Message Received", emailContent)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.error("Could not send message");
    res.sendStatus(500);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
