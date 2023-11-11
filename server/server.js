const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8001;

app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const mongoose = require("mongoose");
const sendCoolEmail = require("../evans_token_stuff/test");

// Connect to the MongoDB database using Mongoose
mongoose.connect("mongodb://localhost:27017/vitalisStaffingDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint to handle form submissions from the frontend.
app.post("/sendMessage", async (req, res) => {
  const { emailData } = req.body;
  try {
    console.log("pp", emailData);
    const sendMail = await sendCoolEmail(emailData);

    if (!sendMail) {
      res.status(500).send("Could not send email");
    } else {
      res.send("Email Successfully sent");
    }

    res.send("Email Successfully sent");
  } catch (error) {
    console.error("Could not send message");
    res.sendStatus(500);
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
