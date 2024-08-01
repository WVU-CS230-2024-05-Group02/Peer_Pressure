import React, { useEffect, useState } from 'react';
import StudentEvaluation from '../components/StudentEvaluationBox';
import StudentCourseTitleBar from '../components/StudentCourseTitleBar';
import StudentCourseRightInfoBox from '../components/StudentCourseRightInfoBox';
import StudentCourseRightButton from '../components/StudentCourseRightButton';

function StudentCourse(){

    // Need to get information about the current evaluations entered from database
    // Need to get information about course name and description from database
    // Need to get information for group names, course grades



    const [instructor, setInstructor] = useState(null);
    const [user, setUser] = useState(null);
    const [student, setStudent] = useState(null);
    const [course, setCourse] = useState(null);
    const [evals, setEvaluations] = useState(null);

    const [loadingCourse, setLoadingCourse] = useState(true);
    const [loadingInstructor, setLoadingInstructor] = useState(true);
    const [loadingStudent, setLoadingStudent] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingEvals, setLoadingEval] = useState(true);

    useEffect(() => {
        const fetchInstructor = async() => {
            try{
                const response = await fetch('/api/instructor');
                const data = await response.json();
                setInstructor(data);
            } catch (err) {
     
            } finally {
                setLoadingInstructor(false);
            }
        };

        const fetchStudent = async () => {
            try {
                const response = await fetch("/api/student");
                const data = await response.json();

                setStudent(data);
            } catch (err) {
            
            } finally {
                setLoadingStudent(false);
            }
        }

        const fetchCourses = async() => {
            try {
                const response = await fetch("/api/currentCourse");
                const data = await response.json();

                setCourse(data);
            } catch (err) {
                console.error("Error fetching courses data: ", err)
            } finally {
                setLoadingCourse(false);
            }
        }

        const fetchEvals = async() => {
            try {
                const response = await fetch("/api/evaluations");
                const data = await response.json();

                setEvaluations(data);
            } catch (err) {
                console.error("Error fetch evaluations: ", err);
            } finally {
                setLoadingEval(false);
            }
        }

        const fetchUser = async() => {
            try {
                const response = await fetch("/api/user");
                const data = await response.json();

                setUser(data);
            } catch (err) {
                
            } finally {
                setLoadingUser(false);
            }
        }
        
        fetchUser();
        fetchCourses();
        fetchInstructor();
        fetchStudent();
        fetchEvals();

    }, []);



    if(loadingCourse || loadingEvals){
        return (
            <div>Loading Course Content...</div>
        );
    } else if (loadingStudent || loadingInstructor || loadingUser) {
        return (
            <div>Loading User Data...</div>
        );
    }

    console.log(evals);
    
    const showGroup = () => {
        // Don't show if this is instructor
        if(user.isInstructor) {
            return;
        }

        // Get the list of people in the same group
        var sID = student.userId;

        // This students group number
        let index = 0;
        for(let i = 0; i < course.studentIDs.length; i++){
            if(course.studentIDs[i] == sID) index = i;
        }
        
        // This students group ID
        let gID = course.groupIDs[index];

        // Everyone with same group ID
        let indexes = [];
        for(let i = 0; i < course.groupIDs.length; i++){
            if(course.groupIDs[i] == gID) indexes.push(i);
        }

        // Gettting student in group names 
        let studentsInGroup = []

        for(var each in indexes){
            studentsInGroup.push(course.studentIDs[each]);
        }


        return (
            <StudentCourseRightInfoBox 
                leftHeader={"Group Emails"} 
                rightHeader={"Group: " + gID} 
                infoInside={studentsInGroup}
            />
        );
    }

    const showGrade = () => {
        if(user.isInstructor) return;

        return (
            <StudentCourseRightInfoBox leftHeader={"Grades"} rightHeader={"Overall Grade: 85"} infoInside={["Evaluation Title - 50%", "Evaluation Title - 75%"]}/>
        )
    }

    const showStudentGrades = () => {
        if(!user.isInstructor) return;

        let student = course.studentIDs;
        let grade = course.grades;
        let groups = course.groupIDs;

        let combined = []

        console.log("Student length: ",student.length)

        for(let i = 0; i < student.length; i++){
            combined.push("Student: " + student[i] + " - Group: " + groups[i] + " - Grade: " + grade[i]);
        }

        
        if(combined.length == 0) combined.push("Currently No Students...")

        return (
            <StudentCourseRightInfoBox leftHeader={"Student Grades"} infoInside={combined}/>
        )
    }

    const takeToManageStudent = () => {
        if(!user.isInstructor) return;

        return (
            <StudentCourseRightButton takeTo="Manage" leftHeader={"Click To Manage Students"}/>
        )
    }

    const takeToCreateEvaluation = () => {
        if(!user.isInstructor) return;

        return (
            <StudentCourseRightButton takeTo="Create" leftHeader="Click To Create Evaluation"/>
        )
    }

    
    const showEvaluations = () => {
        return (
            <div>
                {evals.map(evaluation => (
                    <div style={{marginBottom: "15px"}}>
                        <h4 class="text-left" style={{color: "Green"}}> <u>Evaluations: </u> </h4>
                        <StudentEvaluation dueDate={evaluation.dueDate} title={evaluation.title} description={evaluation.description}/>
                    </div> 
                ))}
            </div>

        );
    }



    {/*Here goes side by and nav bar before rest*/}
    let midBlue = "#516182";

    document.body.style = "background: white";


    return ( 

        <div class="col">
            <StudentCourseTitleBar title={course.title} description={"Section: " + course.section}/>

            <div class="row"> 

            {/*Title of course and evaluation section*/}
            <div class="col-lg-8" style={{paddingLeft: "5%", paddingRight: "3%", marginTop: "2%"}}>
                {showEvaluations()}
            </div>

            

            {/*Group, Students, Grades section*/}
            <div class="col-lg-4" style={{backgroundColor: midBlue, borderLeft: "1px solid black", height: "calc(100vh - 120px)"}}>
                {/*Student Side Bar*/}
                {showGrade()}
                {showGroup()}

                {/*Instructor side bar Show all student grades*/}
                {takeToManageStudent()}
                {takeToCreateEvaluation()}
                {showStudentGrades()}
            </div>

        </div>
        </div>


        
    );
}


export default StudentCourse;