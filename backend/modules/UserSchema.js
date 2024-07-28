const mongoose = require('mongoose');

// Create a Schema for User
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true // makes this field required
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isInstructor: {
        type: Boolean,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema); 
