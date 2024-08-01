import React from 'react';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomeCourseBox(props){
    const navigate = useNavigate();

    // Props that are passed
    // title - description - groupNumber - evaluation1, evaluation2, evaluation3 - grade
    // courseID

    const handleClick = async () => {
        let courseID = props.courseID;

        try {
            const response = await axios.post('/api/setCurrentCourse', {courseID})
            // Go to new page with props.courseID passed through
            navigate('/course');
        } catch (error){
            console.error('Can not get course', error);
        }
    }

    return (
        <button onClick={handleClick} class="col homepageCourse" style={{textAlign: "left", color: "black", minWidth: "500px", maxWidth: "500px", margin: "10px", borderRadius: "5px" }}>

            <div class="row" style={{margin: "auto"}}>
                <h2 class="col-10 float-left">{props.title}</h2>
                

                {props.grade == "" ? "" 
                
                
                : 
                
                <div>
                    <div class="col-2 float-right">
                        <h2 style={{textAlign: "center", margin: "auto", border: "1px solid black"}}>{props.grade}</h2>
                    </div>

                    <hr style={{border: "1px solid black", margin: "0", marginBottom: "10px"}}/>
                    <h5>{props.description}</h5>

                    <p style={{marginBottom: "5px"}}>Group Number: {props.groupNumber}</p>
                </div>
                }


            </div>
            

            <hr style={{border: "1px solid black", margin: "0", marginBottom: "10px"}}/>

            <p style={{marginBottom: "5px"}}><b>Evaluation Due Dates:</b></p>
            <p style={{margin: "5px", color: "red"}}>{props.evaluation1}</p>
            <p style={{margin: "5px"}}>{props.evaluation2}</p>
            <p style={{margin: "5px"}}>{props.evaluation3}</p>



        </button>
    );
}

export default HomeCourseBox;