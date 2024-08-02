import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function HomeCourseBox(props){
    const navigate = useNavigate();

    // Props that are passed
    // title - description - groupNumber - evaluation1, evaluation2, evaluation3 - grade
    // courseID

    const [grade, setGrade] = useState(null);
    const [loadingGrade, setLoadingGrade] = useState(true);

    
    const [user, setUser] = useState(null);
    const [courses, setCourses] = useState(null);

    const [loadingCourse, setLoading] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const fetchGrade = async() => {
            try {
                const response = await fetch("/api/currentGrade");
                const data = await response.json();

                setGrade(data);
            } catch (err) {
                
            } finally {
                setLoadingGrade(false);
            }
        }

        const fetchUser = async() => {
            try{
                const response = await fetch('/api/user');
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error("Error Fetching User Data: ", err);
            } finally {
                setLoadingUser(false);
            }
        };

        const fetchCourses = async() => {
            try {
                const response = await fetch("/api/courses");
                const data = await response.json();

                setCourses(data);
            } catch (err) {
                console.error("Error fetching courses data: ", err)
            } finally {
                setLoading(false);
            }
        }
        
        fetchCourses();
        fetchUser();

        fetchGrade();
    })

    if(loadingGrade || loadingUser || loadingCourse) {
        return (
            <p>Loading Course Data...</p>
        )
    }

    const groupNumber = () => {
        // Gets the course this is
        let index = 0;
        for(let i = 0; i < courses.length; i++){
            if(courses[i].id == props.courseID) index = i;
        }

        // Gets the group the user is in
        let uIndex = 0;
        for(let i = 0; i < courses[index].studentIDs; i++){
            if(courses[index].studentIDs[i] == user.userId) uIndex = i;
        }

        return courses[index].groupIDs[uIndex];

    }

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
        <button onClick={handleClick} class="homepageCourse" style={{textAlign: "left", color: "black", minWidth: "500px", maxWidth: "500px", margin: "10px", borderRadius: "5px" }}>

            <div class="row" style={{margin: "auto"}}>
                <h2 class="col-10 float-left">{props.title}</h2>
                

                {/* {props.grade == "" ? "" 
                
                
                : 
                
                <div>
                    <div class="col-2 float-right">
                        <h2 style={{textAlign: "center", margin: "auto", border: "1px solid black"}}>{Math.round(grade)}</h2>
                    </div>

                    <hr style={{border: "1px solid black", margin: "0", marginBottom: "10px"}}/>
                    <h5>{props.description}</h5>

                    <p style={{marginBottom: "5px"}}>Group Number: {groupNumber()}</p>
                </div>
                } */}


            </div>
        </button>
    );
}

export default HomeCourseBox;