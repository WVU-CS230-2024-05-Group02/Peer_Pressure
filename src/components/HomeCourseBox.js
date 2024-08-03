import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Displayed on the home page
// Clickable element that traverses the user to the class that this represents
function HomeCourseBox(props){
    const navigate = useNavigate();

    // Props that are passed
    // title - courseID

    const [loadingCourse, setLoading] = useState(true);

    // Gets all of the needed data from the backend using fetch calls to the api
    useEffect(() => {
        // Gets the course that this box represents
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
    })

    // If the course is not loaded yet then it can not show the data - return early and say it is loading
    if(loadingCourse) {
        return (
            <p>Loading Course Data...</p>
        )
    }

    // Handles the click when this course is pressed
    const handleClick = async () => {
        let courseID = props.courseID;

        // Uploads the course ID that this box represents and sets that to the course that will be displayed on the course page
        try {
            const response = await axios.post('/api/setCurrentCourse', {courseID})
            // Go to new page with props.courseID passed through
            navigate('/course');
        } catch (error){
            console.error('Can not get course', error);
        }
    }

    // Handles displaying the box
    return (
        <button onClick={handleClick} class="homepageCourse" style={{textAlign: "left", color: "black", minWidth: "500px", maxWidth: "500px", margin: "10px", borderRadius: "5px" }}>

            <div class="row" style={{margin: "auto"}}>
                <h2 class="col-10 float-left">{props.title}</h2>
            </div>
        </button>
    );
}

export default HomeCourseBox;