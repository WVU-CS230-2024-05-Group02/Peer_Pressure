const mongoose = require('mongoose');

// Create a Schema for questions
const questionSchema = new mongoose.Schema({
    title: {type: String},
    weight: {type: Number}
})

const studentGradeSchema = new mongoose.Schema({
    studentID: String,
    averageGrade: Number,
    numberResponses: Number
});

// Create a Schema for evaluation
const evaluationSchema = new mongoose.Schema({
    courseID: String,
    evaluationID: String,

    questions: [questionSchema],
    
    currentGrades: [studentGradeSchema],


    title: String,
    description: String
});

module.exports = mongoose.model('Evaluation', evaluationSchema); 