
const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config(); // Added maybe remove the variablf if necessary
const path = require('path');

// Set all of the schema variables
const User = require('./modules/UserSchema');
const Student = require('./modules/StudentSchema');
const Instructor = require('./modules/InstructorSchema');
const Evaluation = require('./modules/EvaluationSchema');
const Course = require('./modules/CourseSchema');

// Connect to the database
mongoose.connect(
    process.env.MONGODB_URI,
)

PORT = 3000

// creates the express app
const app = express();
app.listen(PORT, () => console.log("Server is listening to port 3000"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// API/stored data
var thisStudent;
var thisInstructor;
var thisUser;



app.get("/api/user", (req, res) => {
    res.json(thisUser);
});

app.get("/api/student", (req, res) => {
    res.json(thisStudent);
});

app.get("/api/instructor", (req, res) => {
    res.json(thisInstructor);
});


// Calls to get the data
app.post("/api/login", async (req, res) => {

    var e = req.body.email;
    var pw = req.body.password;

    // Gets the corect email and password that the user entered
    try {
        // This is a list of all users with that email
        const users = await User.find({email: e});

        if(users[0].password == pw){
            // use app.get to put on all of the information

            // Put user information
            thisUser = users[0];

            console.log("Updated: " + thisUser)


            // Put information for instructor or student
            if(users[0].isInstructor) {
                const instructors = await Instructor.find({userId: users[0].userId});
                thisInstructor = instructors[0];

                console.log("Updated: " + thisInstructor)
            } else {
                const students = await Student.find({userId: users[0].userId});
                thisStudent = students[0];

                console.log("Updated: " + thisStudent)
            }
            res.redirect("/home");
        } else {
            console.log("Failed");
            res.redirect("/");
        }

    } catch (err) {
        res.redirect("/")
    }

});

// Calls to insert data
app.post("/api/signup", async (req, res) => {
    var us = req.body.username; //username
    var e = req.body.email; //email
    var pw = req.body.password; //password
    var iI = (req.body.isInstructor=="on"); // is Instructor

    var userIdentification = e;

    // Make sure no one has the same userIdentification - email must not be signed up already
    const users = await User.find({email: e});
        
    if(users.length != 0){
        res.redirect('/')
        // user already exists so send to sign in page
        return;
    }

    // Want to post this data along with all data on the user on some api page
    const save = new User({
        username: us,
        email: e,
        password: pw,
        isInstructor: iI,
        userId: userIdentification
    });
    save.save();

    thisUser = save;

    if(iI){
        const saveInstructor = new Instructor({
            userId: userIdentification,
            courseId: [],
        });

        saveInstructor.save();

        thisInstructor = saveInstructor;
    }
    else {
        const saveStudent = new Student({
            userId: userIdentification,
            courseId: [],
            groupId: []
        })

        saveStudent.save();

        thisStudent = saveStudent;
    }

    res.redirect('/home');
});


app.post("/api/createcourse", async (req, res) => {
    // Make sure that an instructor is signed in
    var name = req.body.course;
    var section = req.body.sectionNumber;

    var newCourseID = Math.floor(Math.random() * (100000000 - 1 + 1)).toString();

    console.log("Tried to udpate: " + thisUser.isInstructor);

    if(thisUser.isInstructor) {
        // Adds new course class
        const save = new Course({
            instructor: thisInstructor.userId,
            studentIDs: [],
            evalIDs: [],
    
            title: name,
            section: section,
            id: newCourseID
        });
        save.save();

        // Update Instructor courseID list

        updateList = thisInstructor.courseID;

        updateList.push(newCourseID.toString());

        thisInstructor.courseID = updateList;


        result = await Instructor.updateOne(
            {userId: thisInstructor.userId},
            {$set: {courseID: thisInstructor.courseID}},
        );

        console.log('Update result:', result);
        if (result.matchedCount === 0) {
          console.log('No documents matched the criteria.');
        } else if (result.modifiedCount === 0) {
          console.log('Document found, but no changes were made (new data might be identical to existing data).');
        } else {
          console.log('Document updated successfully.');
        }
    
    } 
    res.redirect("/home");
});





// THIS NEEDS TO BE AT THE END
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});







