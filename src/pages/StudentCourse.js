import React from 'react';
import StudentEvaluation from '../components/StudentEvaluationBox';
import StudentCourseTitleBar from '../components/StudentCourseTitleBar';
import StudentCourseRightInfoBox from '../components/StudentCourseRightInfoBox';

function StudentCourse(){

    // Need to get information about the current evaluations entered from database
    // Need to get information about course name and description from database
    // Need to get information for course alerts, group names, course grades

    {/*Here goes side by and nav bar before rest*/}
    let grayBlue = "#e5f3f9";
    let midBlue = "#516182";

    document.body.style = "background: " + "white";


    return ( 

        <div class="col">
            <StudentCourseTitleBar title="Computer Science 230 Lab" description="Lab section of CS230, learning react, MySQL, and Git"/>

            <div class="row"> 

            {/*Title of course and evaluation section*/}
            <div class="col-lg-8" style={{paddingLeft: "5%", paddingRight: "3%", marginTop: "2%"}}>
                
                {/* Overdue Evaluation Section*/}
                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "red"}}> <u>Overdue Evaluations: </u> </h4>
                    <StudentEvaluation assignedDate={"1/1"} dueDate={"1/4"} title={"Group Rating"} description={"Rate your group mates fairly and accurately, determines 10% of project grade"}/>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>

                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "green"}}> <u>Active Evaluations: </u> </h4>

                    {/* All Evaluation Building */}
                    <StudentEvaluation/>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>


                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "yellowgreen"}}> <u>Upcoming Evaluations: </u> </h4>

                    <StudentEvaluation/>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>

            </div>

            {/*Group, Students, Grades section*/}
            <div class="col-lg-4" style={{backgroundColor: midBlue, borderLeft: "1px solid black", height: "calc(100vh - 120px)"}}>
               
                {/* Course Alerts */}
                <StudentCourseRightInfoBox leftHeader={"Course Alerts"} infoInside={["January, 1st: Alert Alert Alert"]}/>

                 {/* My Grades Section */}
                <StudentCourseRightInfoBox leftHeader={"Grades"} rightHeader={"Overall Grade: 85"} infoInside={["Evaluation Title - 50%", "Evaluation Title - 75%"]}/>

                {/* My Group Section */}
                <StudentCourseRightInfoBox leftHeader={"Group"} rightHeader={"Group 1"} infoInside={["Shawn", "Ezra", "Violet", "Lucas", "Banafsheh", "Extra ..."]}/>

            </div>

        </div>
        </div>


        
    );
}


export default StudentCourse;