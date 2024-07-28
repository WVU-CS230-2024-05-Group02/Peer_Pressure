const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    userId: String,
    courseID: [{
        type: String
    }],
});

module.exports = mongoose.model('Instructor', instructorSchema);