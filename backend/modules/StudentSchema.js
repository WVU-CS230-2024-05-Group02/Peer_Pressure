const mongoose = require('mongoose');

// Create a Schema for Student
const studentSchema = new mongoose.Schema({
    userId: String,
    courseID: [{ // Array of strings
        type: String,
    }],
    groupID: [{
        type: String,
    }],
});

module.exports = mongoose.model('Student', studentSchema); 