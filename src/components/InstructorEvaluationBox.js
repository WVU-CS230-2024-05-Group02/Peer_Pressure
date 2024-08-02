import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// The "answer evaluation" box on the student course page
function InstructorEvaluationBox(props){
    const navigate = useNavigate();

    //props data fields
    // assignedDate - dueDate - title - description - evalID


    let evalBackgroundColor = "#e6e6e6";
    let grayBlue = "#e5f3f9";

    let boxShadowEvaluations = "2px 2px 5px rgba(0, 0, 0, 0.3)";


    const handleClickThrough = async () => {
        let id = props.id;

        try {
            const response = await axios.post('/api/setCurrentEvaluation', {id})
            navigate('/evaluations');
        } catch (err) {
            console.error('Can not get evaluation', err)
        }
    }

    return(
        <container>
            <div class="row justify-content-center" style={{backgroundColor: evalBackgroundColor, border: "1px solid black", borderRadius: "10px", margin: "10px", boxShadow: boxShadowEvaluations}}>
                        
            <div class="col-sm-2" style={{borderRight: "1px solid black"}}>
                
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
                    <button onClick={handleClickThrough} className="btn btn-primary h-100 w-100" style={{backgroundColor: grayBlue, border: "0px solid red", borderTopLeftRadius: "5px", borderBottomLeftRadius: "0px"}}>
                        <i className="fas fa-arrow-right fa-2x" style={{color: "black"}}></i>
                    </button>
            </div>



        </div>
    </container>
    );
}

export default InstructorEvaluationBox;