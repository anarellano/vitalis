const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    message: String,
});


module.exports = mongoose.model("Message", messageSchema)