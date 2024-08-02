import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// The info boxes on the right side of student course page
function StudentCourseRightButton(props){
    const navigate = useNavigate();


    //props data fields
    // leftHeader - rightHeader - infoInside
    let grayBlue = "#e5f3f9";

    let rightSideCards = {
        backgroundColor: grayBlue, 
        borderRadius: "5px", 
        padding: '1rem', 
        border: "1px solid black",
        marginTop: "20px",
    };
    
    const handleClick = async () => {
        if(props.takeTo == "Manage") navigate('/managestudents');
        // Need to make current questions field equal to [] before sending to this page
        else if(props.takeTo == "Home") navigate('/home');
        else {

            const reponse = await axios.post('/api/addquestion', {delete: true})

            navigate('/createevaluation');
        }
    }


    return(
        <button onClick={handleClick} style={rightSideCards}> 
                    
            <div class="row">
                <h5 class="float-left" style={{color: "black"}}>{props.leftHeader}</h5>
            </div>
        </button>
    );
}

export default StudentCourseRightButton;