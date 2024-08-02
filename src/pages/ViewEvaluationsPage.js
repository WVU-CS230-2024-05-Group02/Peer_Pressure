import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OverallJustification from '../components/EvaluationJustification';
import { NavItem } from 'react-bootstrap';

const ViewEvaluations = () => {


    // Need to show the current evaluation clicked on
    // Need to show each user listed out with the grades they gave and the Justifications they gave
    const navigate = useNavigate();

    let darkBlue = "#2c3c64";
    let midBlue = "#516182";
    let lightBlue = "#8fbeca";
    let grayBlue = "#e5f3f9";
    let gray = "#e6e6e6";

    const [course, setCourse] = useState(null);
    const [evaluation, setEvaluation] = useState(null);
    const [user, setUser] = useState(null);

    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingCourse, setLoadingCourse] = useState(true);
    const [loadingEvals, setLoadingEval] = useState(true);

    useEffect(() => {
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
                const response = await fetch("/api/currentEvaluation");
                const data = await response.json();

                setEvaluation(data);
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
        fetchEvals();

    }, []);


    if(loadingCourse || loadingEvals || loadingUser){
        return (
            <p>Loading info...</p>
        )
    }

    // get evaluation and course
    document.body.style = "background: " + darkBlue;

    let titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";


    const index = (userId) => {
        let pointer = -1;
        for(let i = 0; i < course.studentIDs.length; i++){
            if(course.studentIDs[i] == userId) {
                pointer = i;
            }
        }

        return pointer;
    }

    const allInGroup = (userId) => {
        let i = index(userId);

        let groupEmails = []
        let groupIndexes = []
        for(let j = 0; j < course.groupIDs.length; j++){
            if(course.groupIDs[j] == course.groupIDs[i]){
                groupIndexes.push(j);
            }
        }

        for(let j = 0; j < groupIndexes.length; j++){
            groupEmails.push(course.studentIDs[groupIndexes[j]]);
        }

        return groupEmails;
    }

    const groupNum = (userId) => {
        let i = index(userId);

        return course.groupIDs[i];
    }


    const forEachStudent = (student) => {
        // Display the justification they gave to the instructor

        let i = index(student);
        let group = groupNum(student);
        let allin = allInGroup(student);

        let justifications = evaluation.justifications[i];


        console.log(course, student, i, justifications)

        if(justifications.length == 0) {
            return (
                <div>
                <br/>
                <h4>Student Has Not Yet Completed Evaluation: {student}</h4>
                </div>

            )
        }

        return (
            <div>
                <h4 style={{margin: "0px"}}>Current Email: {student} </h4>
                <h4>Group Number: {group} </h4>

                {justifications.map( (j, index) => (
                    <div>

                        <hr style={{border: "3px solid black"}}/>

                        <label for="numberAnswer" class="form-label">Justification For: </label>  <br/>
                        <input name="groupMember" readOnly value={allin[index]}/>
                        
                        <br/>
                        <br/>


                        <div class="col" style={{textAlign: "left", border: "1px solid black", borderRadius: "5px", padding: "1%", marginBottom: "20px", backgroundColor: "rgb(194, 237, 255)"}}>
                            <p>{j}</p>
                        </div>

                    </div>
                ))}
            </div>
        )
    }

    const handleClick = () => {
        navigate('/course')
    }

    return (
        
        <div class="row justify-content-center">
            <div class="col-lg-8" style={{textAlign: "left", maxWidth: "1000px", backgroundColor: grayBlue, marginTop: "2%", boxShadow: titleBarShadow, border: "1px solid black", borderRadius: "5px", padding: "1%"}}>
                <h2 style={{textAlign: "center"}}> {evaluation.title} </h2>
                <h5> {evaluation.description} </h5>
                

                { course.studentIDs.map(student => (
                    forEachStudent(student)
                ))}

                <button onClick={handleClick}>Go Back To Course</button>

            </div>

        </div>

    );
}

export default ViewEvaluations;