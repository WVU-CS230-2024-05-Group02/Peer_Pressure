import React from 'react';
import QuestionResponse from '../components/EvaluationQuestion';

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
            <div class="col-lg-8" style={{maxWidth: "1000px", backgroundColor: grayBlue, marginTop: "2%", boxShadow: titleBarShadow, border: "1px solid black", borderRadius: "5px", padding: "1%"}}>
                <h2>Title of the Evaluation</h2>
                <h5>Description of the evaluation. Contains all of the relevant information to the evaluation title because that is what it is here for</h5>
                
                <p style={{margin: "0px"}}>Student Name: Lucas Kniska</p>
                <p>Group Number: 05</p>

                <br></br>

                <QuestionResponse title="Title of the first question" description="Description of the first question that will give further detail into what the numbers mean" justification={false}/>


                <QuestionResponse title="Title of the second question" description="Description of the second question that will give further detail into what the numbers mean" justification={true}/>


                <QuestionResponse title="Title of the third question" description="Description of the third question that will give further detail into what the numbers mean" justification={false}/>


                <QuestionResponse title="Title of the fourth question" description="Description of the fourth question that will give further detail into what the numbers mean" justification={true}/>

                <button type="submit" style={{backgroundColor: darkBlue}}>Submit Response</button>

            </div>
        </div>

    );

}


export default AnswerEvaluation;