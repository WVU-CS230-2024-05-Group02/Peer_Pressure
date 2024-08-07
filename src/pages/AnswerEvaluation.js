import React, { useEffect, useState } from 'react';
import OverallJustification from '../components/EvaluationJustification';
import { useNavigate } from 'react-router-dom';

import "../App.css";

function AnswerEvaluation() {
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

    if(user.isInstructor){
        navigate('/viewevaluations')
    }

    // get evaluation and course
    document.body.style = "background: " + darkBlue;

    let titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";


    const index = () => {
        let pointer = -1;
        for(let i = 0; i < course.studentIDs.length; i++){
            if(course.studentIDs[i] == user.userId) {
                pointer = i;
            }
        }

        return pointer;
    }

    const allInGroup = () => {
        let i = index();

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

    const groupNum = () => {
        let i = index();

        return course.groupIDs[i];
    }

    allInGroup();

    const listCurrent = (index) => {
        let groupMembers = allInGroup();

        return (

            <div>
                <hr style={{border: "1px solid black"}}/>
                <br/>
                <label for="numberAnswer" class="form-label">Student Currently Evaluating: </label>  <br/>
                <input name="groupMember" readOnly value={groupMembers[index]}/>
            </div>
               
        )
    }

    const listQuestions = (i) => {
        let questions = evaluation.questions;

        return (
            <div>
                {questions.map( (q, index) => (
                    <div class="col" style={{backgroundColor: 'rgb(194, 237, 255)', textAlign: "left", border: "1px solid black", borderRadius: "5px", padding: "1%", marginBottom: "20px"}}>
                    <h5>{q}</h5>
        
                    <div class="form-group">
                    <label for="numberAnswer" class="form-label">Answer From 1-10: </label>  <br/>
                    <select class="form-control" id="numberAnswer" name={"numberAnswer-" + i}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    </div>
                </div>
                ))}
            </div>
        )
    }

    const showEntireForm = () => {
        let groupMembers = allInGroup();

        return (
            <div>
                {groupMembers.map( (member, i) => (
                    
                    <React.Fragment key={i}>
                        {listCurrent(i)}
                        <hr/>
                        {listQuestions(i)}
                        <OverallJustification/>
                    </React.Fragment>



                ))}
            </div>
        )
    }

    return (
        
        // todo set max width
        <div class="row justify-content-center">
            <div class="col-lg-8" style={{textAlign: "left", maxWidth: "1000px", backgroundColor: grayBlue, marginTop: "2%", boxShadow: titleBarShadow, border: "1px solid black", borderRadius: "5px", padding: "1%"}}>
                <h2 style={{textAlign: "center"}}> {evaluation.title} </h2>
                <h5> {evaluation.description} </h5>
                
                <p style={{margin: "0px"}}>Current Email: {user.userId} </p>
                <p>Group Number: {groupNum()} </p>


                <form action="/api/submitEvaluation" method="post">

                    {showEntireForm()}


                    <button class="evaluationSubmit" type="submit">Submit Response</button>

                </form>


            </div>
        </div>

    );

}


export default AnswerEvaluation;