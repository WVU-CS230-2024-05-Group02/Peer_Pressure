const mongoose = require('mongoose');

// Create a Schema for Student
const courseSchema = new mongoose.Schema({
    instructor: String,
    studentIDs: [{ // Array of strings
        type: String,
    }],
    groupIDs: [{
        type: Number,
    }],
    grades: [{
        type: Number,
    }],
    evalIDs: [{
        type: String,
    }],
    title: String,
    section: String,
    id: String
});

module.exports = mongoose.model('Course', courseSchema); 