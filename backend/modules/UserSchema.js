const mongoose = require('mongoose');

// Create a Schema for User - keeps track of all of the account details
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // If user is an instructor they have special permission
    isInstructor: {
        type: Boolean,
        required: true
    },
    // Identification this user will be referred to as in every operation with it
    userId: {
        type: String,
        required: true
    }
});

// Needed so index.js can use this schema
module.exports = mongoose.model('User', userSchema); 
