import React from 'react';
import "../App.css";

function HomeCourseBox(props){

    // Props that are passed
    // title - description - groupNumber - evaluation1, evaluation2, evaluation3 - grade

    let darkBlue = "#2c3c64";
    let midBlue = "#516182";
    let lightBlue= "#8fbeca";
    let grayBlue= "#e5f3f9";
    let gray= "#e6e6e6";


    return (
        <button class="col homepageCourse" style={{textAlign: "left", color: "black", minWidth: "500px", maxWidth: "500px", margin: "10px", borderRadius: "5px" }}>
            
            <div class="row" style={{margin: "auto"}}>
                <h2 class="col-10 float-left">{props.title}</h2>
                
                <div class="col-2 float-right">
                    <h2 style={{textAlign: "center", margin: "auto", border: "1px solid black"}}>{props.grade}</h2>
                </div>
            </div>
            
            <hr style={{border: "1px solid black", margin: "0", marginBottom: "10px"}}/>
            <h5>{props.description}</h5>
            
            <p style={{marginBottom: "5px"}}>Group Number: {props.groupNumber}</p>

            <hr style={{border: "1px solid black", margin: "0", marginBottom: "10px"}}/>

            <p style={{marginBottom: "5px"}}><b>Evaluation Due Dates:</b></p>
            <p style={{margin: "5px", color: "red"}}>{props.evaluation1}</p>
            <p style={{margin: "5px"}}>{props.evaluation2}</p>
            <p style={{margin: "5px"}}>{props.evaluation3}</p>



        </button>
    );
}

export default HomeCourseBox;