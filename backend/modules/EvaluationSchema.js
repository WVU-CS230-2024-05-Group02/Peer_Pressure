const mongoose = require('mongoose');

// Create a Schema for evaluation
const evaluationSchema = new mongoose.Schema({
    courseID: String,
    evaluationID: String,
    questions: [String],
    currentGrades: [String],
    justifications: [[String]],
    dueDate: String,
    title: String,
    description: String
});

module.exports = mongoose.model('Evaluation', evaluationSchema); 