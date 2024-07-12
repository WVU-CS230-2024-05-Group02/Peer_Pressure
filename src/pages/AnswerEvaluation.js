import React from 'react';
import QuestionResponse from '../components/EvaluationQuestion';
import OverallJustification from '../components/EvaluationJustification';

import "../App.css";

function AnswerEvaluation() {

    let darkBlue = "#2c3c64";
    let midBlue = "#516182";
    let lightBlue = "#8fbeca";
    let grayBlue = "#e5f3f9";
    let gray = "#e6e6e6";


    document.body.style = "background: " + darkBlue;

    let titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";


    return (
        
        // todo set max width
        <div class="row justify-content-center">
            <div class="col-lg-8" style={{textAlign: "left", maxWidth: "1000px", backgroundColor: grayBlue, marginTop: "2%", boxShadow: titleBarShadow, border: "1px solid black", borderRadius: "5px", padding: "1%"}}>
                <h2 style={{textAlign: "center"}}>Title of the Evaluation</h2>
                <h5>Description of the evaluation. Contains all of the relevant information to the evaluation title because that is what it is here for</h5>
                
                <p style={{margin: "0px"}}>Student Name: Lucas Kniska</p>
                <p>Group Number: 05</p>

                <label for="numberAnswer" class="form-label">Student Currently Evaluating: </label>  <br/>
                    <select class="form-control" id="numberAnswer">
                    <option>Teammate name 1</option>
                    <option>Teammate name 2</option>
                    <option>Teammate name 3</option>
                    </select>
                <br></br>

                <QuestionResponse title="Title of the first question" description="Description of the first question that will give further detail into what the numbers mean" justification={false}/>


                <QuestionResponse title="Title of the second question" description="Description of the second question that will give further detail into what the numbers mean" justification={false}/>


                <QuestionResponse title="Title of the third question" description="Description of the third question that will give further detail into what the numbers mean" justification={false}/>


                <QuestionResponse title="Title of the fourth question" description="Description of the fourth question that will give further detail into what the numbers mean" justification={false}/>

                <OverallJustification/>

                <button class="evaluationSubmit" type="submit">Submit Response</button>

            </div>
        </div>

    );

}


export default AnswerEvaluation;