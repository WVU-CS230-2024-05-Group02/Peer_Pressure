
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
// Id of the current course the user is on
var currentCourse;

var currentEvaluation;

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

    var index = 0;
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }

    res.json(thisCourses[index]);
});

app.get("/api/evaluations", async (req, res) => {
    
    // Gets the current course
    var index = 0;
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }
    var course = thisCourses[index];

    var evaluations = [];

    for(let i = 0; i < course.evalIDs.length; i++){
        let eval = await Evaluation.findOne(
            {evaluationID: course.evalIDs[i]}
        );

        evaluations.push(eval);
    }

    res.json(evaluations);
});


app.get("/api/user", (req, res) => {
    res.json(thisUser);
});

app.get("/api/student", (req, res) => {
    res.json(thisStudent);
});

app.get("/api/instructor", (req, res) => {
    res.json(thisInstructor);
});

app.get("/api/currentEvaluation", async (req, res) => {
    
    let currentEval = await Evaluation.findOne(
        {evaluationID: currentEvaluation}
    )

    res.json(currentEval);

});

app.get("/api/currentGrade", async (req, res) => {
    // Gets the current course
    var index = 0;
    for(let i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }
    
    let course = thisCourses[index];
    let evals = []
    for(let i = 0; i < course.evalIDs.length; i++){
        let eval = await Evaluation.findOne(
            {evaluationID: course.evalIDs[i]}
        );
        evals.push(eval);
    };

    let userIndex = 0;
    for(let i = 0; i < course.studentIDs.length; i++){
        if(course.studentIDs[i] == thisUser.userId) userIndex = i;
    }

    let allNumberVals = 0
    let totalQuestions = 0
    for(let i = 0; i < evals.length; i++){
        let thisGrade = evals[i].currentGrades[userIndex];
        
        thisGrade = thisGrade.split(" ");

        let thisNumberGrade = thisGrade[0];
        let thisNumberQuestions = thisGrade[1];

        allNumberVals += thisNumberGrade;
        totalQuestions = thisNumberQuestions;
    }


    let averageGrade = 10*allNumberVals/totalQuestions;

    res.json(averageGrade);
});

app.get("/api/allCourseGrades", async (req, res) => {
    // Gets the current course
    var index = 0;
    for(let i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }
    
    let course = thisCourses[index];
    let evals = []
    for(let i = 0; i < course.evalIDs.length; i++){
        let eval = await Evaluation.findOne(
            {evaluationID: course.evalIDs[i]}
        );
        evals.push(eval);
    };

    let studentGrades = [];

    for(let i = 0; i < course.studentIDs.length; i++){
        let allNumberVals = 0
        let totalQuestions = 0
        for(let j = 0; j < evals.length; j++){
            let thisGrade = evals[j].currentGrades[i];
            
            thisGrade = thisGrade.split(" ");
    
            let thisNumberGrade = thisGrade[0];
            let thisNumberQuestions = thisGrade[1];
    
            allNumberVals += thisNumberGrade;
            totalQuestions = thisNumberQuestions;
        }
    
        let averageGrade = 10*allNumberVals/totalQuestions;

        studentGrades.push(averageGrade);
    }

    // Could throw in an update to the current course here with the updated grades

    res.json(studentGrades);

});



// Calls to post the data
app.post("/api/submitEvaluation", async (req, res) => {
    
    console.log(req.body);

    let justifications = req.body.StudentResponse;
    let groupMember = req.body.groupMember;

    if(typeof groupMember == "string"){
        groupMember = [groupMember];
    }
    
    // Gets all of the data values entered
    let values = []
    for(let i = 0; i < groupMember.length; i++){
        let forStudent = req.body['numberAnswer-' + i];
        values.push(forStudent);
    }

    let thisEval = await Evaluation.findOne(
        {evaluationID: currentEvaluation}
    );

    // Gets the current course
    var index = -1;
    for(let i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }
    let course = thisCourses[index];

    // Find what index the current user is
    index = -1;
    for(let i = 0; i < course.studentIDs.length; i++){
        if(course.studentIDs[i] == thisUser.userId) index = i;
    }

    // Add justifications to user
    thisEval.justifications[index] = justifications;

    // Find indexes of the other groupMembers
    let indexes = [];
    for(let i = 0; i < groupMember.length; i++){
        for(let j = 0; j < course.studentIDs.length; j++){
            if(groupMember[i] == course.studentIDs[j]) indexes.push(j);
        }
    }

    // Update the values for the all group members in order
    for(let i = 0; i < indexes.length; i++){
        let lastValue = thisEval.currentGrades[indexes[i]]

        lastValue = lastValue.split(" ");

        let numberGrade = Number(lastValue[0]);
        let questionNum = Number(lastValue[1]);

        for(let j = 0; j < values[i].length; j++){
            numberGrade += Number(values[i][j]);
            questionNum += 1;
        }

        // Need to update the grade of the user here
        thisEval.currentGrades[indexes[i]] =  String(numberGrade) + " " + String(questionNum);

        console.log("Updated an Evaluation")
    }

    console.log("Indexes of same: ", indexes)
    console.log("This Eva", thisEval.currentGrades);

    result = await Evaluation.updateOne(
        {evaluationID: thisEval.evaluationID},
        {$set: {currentGrades: thisEval.currentGrades, justifications: thisEval.justifications}}
    );

    console.log('Update result:', result);
    if (result.matchedCount === 0) {
        console.log('No documents matched the criteria.');
    } else if (result.modifiedCount === 0) {
        console.log('Document found, but no changes were made (new data might be identical to existing data).');
    } else {
        console.log('Document updated successfully.');
    }
    
    res.redirect('/course');
});


app.post("/api/setCurrentEvaluation", (req, res) => {
    const id = req.body.id;
    currentEvaluation = id;
    res.redirect('/evaluations')
});

app.post("/api/setCurrentCourse", (req, res) => {
    const data = req.body;
    currentCourse = data.courseID;

    res.redirect("/course")
});

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

        thisCourses = [];

        thisInstructor = saveInstructor;
    }
    else {
        const saveStudent = new Student({
            userId: userIdentification,
            courseId: [],
            groupId: []
        })

        thisCourses = [];

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

    var thisCourse = currentCourse;
    
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
        {$set: {courseID: thisStudent.courseID, groupID: thisStudent.groupID}}
    )

    // Removes the student from the course
    thisCourse = await Course.findOne(
        {id: thisCourse}    
    );

    for(var i = 0; i < thisCourse.studentIDs.length; i++){
        if(thisCourse.studentIDs[i] == email){
            removeGroup = i;
        }
    }

    // Index student is located at in the course
    let removeIndex = 0;
    for(var i = 0; i < thisCourse.studentIDs.length; i++){
        if(thisCourse.studentIDs[i] == email){
            removeIndex = i;
        }
    }

    thisCourse.studentIDs = thisCourse.studentIDs.filter(id => id != email);
    thisCourse.groupIDs.splice(removeIndex, 1);
    thisCourse.grades.splice(removeIndex, 1);

    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse.id) {
            thisCourses[i] = thisCourse;
        }
    }

    // Update the course on the db
    await Course.updateOne(
        {id: thisCourse.id},
        {$set: {studentIDs: thisCourse.studentIDs, groupIDs: thisCourse.groupIDs, grades: thisCourse.grades}}
    );

    res.redirect("/managestudents")

})

app.post("/api/addstudent", async (req, res) => {
    email = req.body.email;
    group = req.body.group;

    var thisCourse = currentCourse;

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
    thisCourse = await Course.findOne(
        {id: thisCourse}
    )

    thisCourse.studentIDs.push(email);

    const numberGroup = parseInt(group.replace('Group ', ''), 10);

    thisCourse.groupIDs.push(numberGroup);
    thisCourse.grades.push("0 0");

    result = await Course.updateOne(
        {id: thisCourse.id},
        {$set: {studentIDs: thisCourse.studentIDs, groupIDs: thisCourse.groupIDs, grades: thisCourse.grades}}
    );


    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse.id) {
            thisCourses[i] = thisCourse;
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

    var thisCourse = currentCourse;

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
    thisCourse = await Course.findOne(
        {id: thisCourse}
    )


    console.log(thisCourse.studentIDs, email);

    for(let i = 0; i < thisCourse.studentIDs.length; i++){
        if(thisCourse.studentIDs[i] == email) {

            console.log(group);

            const numberGroup = parseInt(group.replace('Group ', ''));

            console.log(numberGroup);

            thisCourse.groupIDs[i] = numberGroup;
            console.log("Updated Group IDs")
            break;
        }
    }

    result = await Course.updateOne(
        {id: thisCourse.id},
        {$set: {groupIDs: thisCourse.groupIDs}}
    );

    // update thisCourses api
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == thisCourse.id) {
            thisCourses[i] = thisCourse;
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

app.post("/api/createEvaluation", async (req, res) => {
    var dueDate = req.body.date;
    var title = req.body.title;
    var description = req.body.description;

    var newEvalID = Math.floor(Math.random() * (100000000 - 1 + 1)).toString();

    let studentGrades = []
    

    var index = 0;
    for(var i = 0; i < thisCourses.length; i++){
        if(thisCourses[i].id == currentCourse){
            index = i
        }
    }

    course = thisCourses[index];

    justifications = []
    for(student in course.studentIDs){
        studentGrades.push("0 0")
        justifications.push([])
    }

    // Saved evaluation
    let save = new Evaluation({
        courseID: currentCourse,
        evaluationID: newEvalID,
        questions: currentQuestions,
        currentGrades: studentGrades,
        justifications: justifications,
        dueDate: dueDate,
        title: title,
        description: description
    });

    // save the new evaluation
    save.save();

    // Add the evaluation id to the course
    thisCourses[index].evalIDs.push(newEvalID);

    await Course.updateOne(
        {id: thisCourses[index].id},
        {$set: {evalIDs: thisCourses[index].evalIDs}}
    );


    currentQuestions = [];

    res.redirect("/course")
});


var currentQuestions = []
app.post("/api/addquestion", (req, res) => {
   
    if(req.body.delete == true){
        currentQuestions = [];
        res.redirect("/createevaluation");
        return;
    }
   
    let q = req.body.question;

    currentQuestions.push(q);

    res.redirect("/createevaluation");
});

app.get("/api/currentQuestions", (req, res) => {
    res.json(currentQuestions);
})


// THIS NEEDS TO BE AT THE END
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});