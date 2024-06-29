import React from "react";

// The "answer evaluation" box on the student course page
function StudentEvaluation(props){

    //props data fields
    // assignedDate - dueDate - title - description


    let evalBackgroundColor = "#e6e6e6";
    let grayBlue = "#e5f3f9";

    let boxShadowEvaluations = "2px 2px 5px rgba(0, 0, 0, 0.3)";


    return(
        <container>
            <div class="row justify-content-center" style={{backgroundColor: evalBackgroundColor, border: "1px solid black", borderRadius: "10px", margin: "10px", boxShadow: boxShadowEvaluations}}>
                        
            <div class="col-sm-2" style={{borderRight: "1px solid black"}}>
                
                <div style={{borderBottom: "1px dotted black"}}>
                    <p>Assigned Date: {props.assignedDate}</p>

                </div>
            
                <p>Due Date: {props.dueDate}</p>
            </div>
            <div class="col-sm-8">
                <div class="row h-50 d-flex align-items-center">
                    <h4 class="w-100 text-center">{props.title}</h4>
                </div>
                <div class="row h-50 d-flex align-items-center">
                    <p class="w-100 text-center">{props.description}</p>
                </div>
            </div>
            
            <div class="col-sm-2" style={{backgroundColor: grayBlue, borderLeft: "1px solid black", padding:"0px"}}>
                {/* <p> Answer Evaluation</p> */}
                <button className="btn btn-primary h-100 w-100" style={{backgroundColor: grayBlue, border: "0px solid red", borderTopLeftRadius: "5px", borderBottomLeftRadius: "0px"}}>
                    <i className="fas fa-arrow-right fa-2x" style={{color: "black"}}></i>
                </button>
            </div>
        </div>
    </container>
    );
}

export default StudentEvaluation;