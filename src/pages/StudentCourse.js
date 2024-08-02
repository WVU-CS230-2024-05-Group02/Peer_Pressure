import React, { useEffect, useState } from 'react';
import StudentEvaluation from '../components/StudentEvaluationBox';
import StudentCourseTitleBar from '../components/StudentCourseTitleBar';
import StudentCourseRightInfoBox from '../components/StudentCourseRightInfoBox';
import StudentCourseRightButton from '../components/StudentCourseRightButton';
import InstructorEvaluationBox from '../components/InstructorEvaluationBox';

function StudentCourse(){

    // Need to get information about the current evaluations entered from database
    // Need to get information about course name and description from database
    // Need to get information for group names, course grades



    const [instructor, setInstructor] = useState(null);
    const [user, setUser] = useState(null);
    const [student, setStudent] = useState(null);
    const [course, setCourse] = useState(null);
    const [evals, setEvaluations] = useState(null);

    const [grade, setGrade] = useState(null);
    const [loadingGrade, setLoadingGrade] = useState(true);

    const [studentGrades, setAllGrades] = useState(null);
    const [loadingAllGrades, setLoadingAllGrades] = useState(true);

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

        const fetchGrade = async() => {
            try {
                const response = await fetch("/api/currentGrade");
                const data = await response.json();

                setGrade(data);
            } catch (err) {
                
            } finally {
                setLoadingGrade(false);
            }
        }

        const fetchAllGrades = async() => {
            try {
                const response = await fetch("/api/allCourseGrades");
                const data = await response.json();

                setAllGrades(data);
            } catch (err) {
                
            } finally {
                setLoadingAllGrades(false);
            }
        }
        
        fetchUser();
        fetchCourses();
        fetchInstructor();
        fetchStudent();
        fetchEvals();
        fetchGrade();
        fetchAllGrades();

    }, []);



    if(loadingCourse || loadingEvals){
        return (
            <div>Loading Course Content...</div>
        );
    } else if (loadingStudent || loadingInstructor || loadingUser || loadingGrade || loadingAllGrades) {
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
        let index = -1;
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

        for(let i = 0; i < indexes.length; i++){
            studentsInGroup.push(course.studentIDs[indexes[i]])
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
            <StudentCourseRightInfoBox leftHeader={"Grades"} rightHeader={"Overall Grade: " + grade}/>
        )
    }

    const showStudentGrades = () => {
        if(!user.isInstructor) return;

        let student = course.studentIDs;
        let groups = course.groupIDs;

        let combined = []

        console.log("Student length: ",student.length)

        for(let i = 0; i < studentGrades.length; i++){
            if(studentGrades[i] == null) studentGrades[i] = "N/A"
        }

        for(let i = 0; i < student.length; i++){
            combined.push("Student: " + student[i] + " - Group: " + groups[i] + " - Grade: " + studentGrades[i]);
        }

        // Get all of the grades for the students

        
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

    const takeToHomeScreen = () => {
        return (
            <StudentCourseRightButton takeTo="Home" leftHeader="Click To Go To Home Page"/>

        )
    }


    const showInstructorEvaluations = () => {
        return (
            <div>
                <h4 className="text-left" style={{color: "green"}}> <u>View All Evaluations: </u> </h4>
                
                {evals.map( (evaluation, i) => (               
                    <div style={{marginBottom: "15px"}}>
                        <InstructorEvaluationBox id={evaluation.evaluationID} dueDate={evaluation.dueDate} title={evaluation.title} description={evaluation.description}/>
                    </div>  
                ))}
            </div>



        );
    }

    
    const showEvaluations = () => {

        if(user.isInstructor) return (
            <React.Fragment>
                {showInstructorEvaluations()}
            </React.Fragment>
        );

        let index = 0;
        for(let i = 0; i < course.studentIDs.length; i++){
            if(course.studentIDs[i] == user.userId) index = i;
        }

        let none = true;

        let complete= [];
        for(let i = 0; i < evals.length; i++){
            if(evals[i].justifications[index].length == 0) {
                none = false;
                complete.push(true)
            }
            else complete.push(false);
        }

        return (
            <div>

                { !none ? 
                    <h4 class="text-left" style={{color: "Green"}}> <u>Evaluations To Complete: </u> </h4>
                    :
                    <div/>
                }

                {evals.map( (evaluation, i) => (

                    <div>


                    {complete[i] == true ? 
                        <div style={{marginBottom: "15px"}}>
                            <StudentEvaluation clickable="true" id={evaluation.evaluationID} dueDate={evaluation.dueDate} title={evaluation.title} description={evaluation.description}/>
                        </div> 
                        :
                        <div></div>
                    }

                    </div>
                ))}

                <h4 className="text-left" style={{color: "green"}}> <u>Evaluations Previously Completed: </u> </h4>
                
                {evals.map( (evaluation, i) => (
                    <div>
                    {complete[i] == false ? 
                        <div style={{marginBottom: "15px"}}>
                            <StudentEvaluation id={evaluation.evaluationID} dueDate={evaluation.dueDate} title={evaluation.title} description={evaluation.description}/>
                        </div> 
                        :
                        <div></div>
                    }

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
                {takeToHomeScreen()}
                {showStudentGrades()}
            </div>

        </div>
        </div>


        
    );
}


export default StudentCourse;