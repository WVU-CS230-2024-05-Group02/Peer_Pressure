
const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config(); // Added maybe remove the variablf if necessary

// Connect to the database
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useUnifiedTopology: true
    }
)

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
const User = mongoose.model('User', userSchema); 

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
const Student = mongoose.model('Student', studentSchema); 
 
const instructorSchema = new mongoose.Schema({
    userId: String,
    courseID: [{
        type: String
    }],
});
const Instructor = mongoose.model('Instructor', instructorSchema);


// creates the express app
const app = express();
app.listen(3000, () => console.log("Server is listening to port 3000"));
app.use(express.static("build"));
app.use(express.urlencoded({ extended: false }));


// API/stored data

// Calls to get the data
app.get("/api/items", (req, res) => {
    res.send(classData)
})

// Calls to insert data

app.post("/api/signup", (req, res) => {
    var us = req.body.username; //username
    var e = req.body.email; //email
    var pw = req.body.password; //password
    var iI = (req.body.isInstructor=="on"); // is Instructor

    var userIdentification = e;
    console.log("User Identification" + userIdentification);

    // TODO Make sure no one has the same userIdentification - email must not be signed up already


    // Want to post this data along with all data on the user on some api page
    const save = new User({
        username: us,
        email: e,
        password: pw,
        isInstructor: iI,
        userId: userIdentification
    });

    save.save();

    if(iI){
        const saveInstructor = new Instructor({
            userId: userIdentification,
            courseId: [],
        });

        saveInstructor.save();
    }
    else {
        const saveStudent = new Student({
            userId: userIdentification,
            courseId: [],
            groupId: []
        })

        saveStudent.save();
    }

    // TODO Need to use res.send to send infromation to a specific page here - During Sprint 4

    res.redirect('/home');
});




// app.get("/api/db", (req, res) => {
//     Student.find({}, (err, found) => { // .find finds and returns documents - the first parameter {} specifies queries to recieve documents that match a particular condition, in this case it is blank so all documents of this type are received
//         if(!err) {
//             res.send(found);
//         }
//         console.log(err);
//         res.send("Some error occured");
//     })

// });





