
const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config(); // Added maybe remove the variablf if necessary
const path = require('path');
const cors = require('cors');

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
app.use(cors());


// API/stored data
var thisStudent;
var thisInstructor;
var thisUser;
var thisCourses = [];
var currentCourse;

app.get("/api/courses", (req, res) => {
    res.json(thisCourses);
})

app.get("/api/currentCourse", (req, res) => {

    if(thisUser.isInstructor){
        if(thisInstructor.courseID.length == 0){
            res.redirect("/home")
            return;
        }
    }
    else {
        if(thisStudent.courseID.length == 0){
            res.redirect("/home")
            return;
        }
    }


    currentCourse = thisCourses[0];
    res.json(currentCourse);
})

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


            thisCourses = []

            // Put information for instructor or student
            if(users[0].isInstructor) {
                const instructors = await Instructor.find({userId: users[0].userId});
                thisInstructor = instructors[0];

                // Add all of the courses
                for(var i = 0; i < thisInstructor.courseID.length; i++) {
                    const foundCourse = await Course.findOne({id: thisInstructor.courseID[i]})
                    thisCourses.push(foundCourse);
                }
            } else {
                const students = await Student.find({userId: users[0].userId});
                thisStudent = students[0];

                // Add all of the courses
                for(var i = 0; i < thisStudent.courseID.length; i++) {
                    const foundCourse = await Course.findOne({id: thisStudent.courseID[i]})
                    thisCourses.push(foundCourse);
                }
            }

            console.log(thisCourses);

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

    //students should not be on this page
    if(!thisUser.isInstructor) {
        res.redirect("/home");
        return;
    }

    // Adds new course class
    const save = new Course({
        instructor: thisInstructor.userId,
        studentIDs: [],
        groupIDs: [],
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
    thisCourses.push(save);

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
    
    res.redirect("/home");
});


app.post("/api/removestudent", async (req, res) => {
    email = req.body.email;

    // NEED TO CHANGE HOW THE INSTRUCTOR KNOWS WHAT CLASS IS CURRENTLY SELECTED
    var thisCourse = thisInstructor.courseID[0];
    // would not need to do this, instead would just have to update one
    

    // Removes the course from the student
    removeStudent = await Student.findOne(
        {userId: email}
    );

    if(!removeStudent){
        console.log("Student did not match")
        res.redirect("/managestudents")
        return;
    }

    let removeGroup;
    for(var i = 0; i < removeStudent.courseID.length; i++){
        if(removeStudent.courseID[i] == thisCourse){
            removeGroup = i;
        }
    }

    removeStudent.courseID = removeStudent.courseID.filter(id => id != thisCourse);
    removeStudent.groupID.splice(removeGroup, 1);
    thisStudent = removeStudent;

    await Student.updateOne(
        {userId: email},
        {$set: {courseID: removeStudent.courseID, groupID: removeStudent.groupID}}
    )

    // Removes the student from the course
    removeStudent = await Course.findOne(
        {id: thisCourse}    
    );


    for(var i = 0; i < removeStudent.studentIDs.length; i++){
        if(removeStudent.studentIDs[i] == email){
            removeGroup = i;
        }
    }
    removeStudent.studentIDs = removeStudent.studentIDs.filter(id => id != email);
    removeStudent.groupIDs.splice(removeGroup, 1);

    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse) {
            thisCourses[i] = removeStudent;
        }
    }

    // Update the course on the db
    await Course.updateOne(
        {id: thisCourse},
        {$set: {studentIDs: removeStudent.studentIDs, groupIDs: removeStudent.groupIDs}}
    );

    res.redirect("/managestudents")

})

app.post("/api/addstudent", async (req, res) => {
    email = req.body.email;
    group = req.body.group;

    // NEED TO CHANGE HOW THE INSTRUCTOR KNOWS WHAT CLASS IS CURRENTLY SELECTED
    var thisCourse = thisInstructor.courseID[0];
     // Would also have this Course Variable to represent current values
    // would not need to do this, instead would just have to update one

    // Updates the student to reflect being added to the change
    addedStudent = await Student.findOne(
        {userId: email}
    )

    // Conditions for if student does not have account or is already in the course
    if(!addedStudent){
        console.log("Student did not match")
        res.redirect("/managestudents")
        return;
    }
    else if (addedStudent.courseID.includes(thisCourse)){
        console.error("Student is already in the course");
        res.redirect("/managestudents");
        return;
    }

    addedStudent.courseID.push(thisCourse);
    addedStudent.groupID.push(group);

    addStudent = await Student.updateOne(
        {userId: email},
        {$set: {
            courseID: addedStudent.courseID,
            groupID: addedStudent.groupID
        }}
    )


    // would not need to do this, instead would just have to update one
    currentCourse = await Course.findOne(
        {id: thisCourse}
    )

    currentCourse.studentIDs.push(email);

    const numberGroup = parseInt(group.replace('Group ', ''), 10);

    currentCourse.groupIDs.push(numberGroup);

    result = await Course.updateOne(
        {id: thisCourse},
        {$set: {studentIDs: currentCourse.studentIDs, groupIDs: currentCourse.groupIDs}}
    );


    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse) {
            thisCourses[i] = currentCourse;
        }
    }


    console.log('Update result:', result);
    if (result.matchedCount === 0) {
      console.log('No documents matched the criteria.');
    } else if (result.modifiedCount === 0) {
      console.log('Document found, but no changes were made (new data might be identical to existing data).');
    } else {
      console.log('Document updated successfully.');
    }

    res.redirect("/managestudents");
});

app.post("/api/editstudent", async (req, res) => {
    email = req.body.email;
    group = req.body.group;

    // NEED TO CHANGE HOW THE INSTRUCTOR KNOWS WHAT CLASS IS CURRENTLY SELECTED
    var thisCourse = thisInstructor.courseID[0];
     // Would also have this Course Variable to represent current values
    // would not need to do this, instead would just have to update one

    // Updates the student to reflect being added to the change
    addedStudent = await Student.findOne(
        {userId: email}
    )

    // Conditions for if student does not have account or is not in course
    if(!addedStudent){
        console.log("Student did not match")
        res.redirect("/managestudents")
        return;
    }
    else if (!addedStudent.courseID.includes(thisCourse)){
        console.error("Student is not in the course");
        res.redirect("/managestudents");
        return;
    }


    for(var i = 0; i < addedStudent.courseID.length; i++){
        if(addedStudent.courseID[i] == thisCourse) {
            addedStudent.groupID[i] = group;
            break;
        }
    }

    addStudent = await Student.updateOne(
        {userId: email},
        {$set: {
            groupID: addedStudent.groupID
        }}
    )

    // would not need to do this, instead would just have to update one
    currentCourse = await Course.findOne(
        {id: thisCourse}
    )

    for(var i = 0; i < currentCourse.studentIDs.length; i++){
        if(currentCourse.studentIDs[i] == email) {
            const numberGroup = parseInt(group.replace('Group ', ''), 10);
            currentCourse.groupIDs[i] = numberGroup;
            break;
        }
    }

    result = await Course.updateOne(
        {id: thisCourse},
        {$set: {groupIDs: currentCourse.groupIDs}}
    );

    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse) {
            thisCourses[i] = currentCourse;
        }
    }

    console.log('Update result:', result);
    if (result.matchedCount === 0) {
      console.log('No documents matched the criteria.');
    } else if (result.modifiedCount === 0) {
      console.log('Document found, but no changes were made (new data might be identical to existing data).');
    } else {
      console.log('Document updated successfully.');
    }

    res.redirect("/managestudents");
});


// THIS NEEDS TO BE AT THE END
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});







