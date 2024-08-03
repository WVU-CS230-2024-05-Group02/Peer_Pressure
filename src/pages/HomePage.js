import React, { useEffect, useState } from 'react';
import HomeCourseBox from '../components/HomeCourseBox';
import { useNavigate } from 'react-router-dom';

// Page taken to right after loaded in
// Shows courses the user is in and if the user is an instructor also the option to create a new course
function HomePage() {
    const navigate = useNavigate();

    // Used to keep track of all needed database information
    const [user, setUser] = useState(null);
    const [courses, setCourses] = useState(null);

    // Used to keep track of if data is still loading
    const [loadingCourse, setLoading] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);

    // Gets all of the data from the backend
    useEffect(() => {
        const fetchUser = async() => {
            try{
                // fetch gets the data from that page and then user is set equal to the data
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
                // fetch gets the data from that page; then courses is set equal to the data
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
    }, []);

    
    // Shows all of the course boxes that appear in the homescreen using the homeCourseBox element
    function showCourseBoxes() {        
        return (
            <div className="row">
                {courses.map( course => (
                    <HomeCourseBox
                        title={course.title}
                        description=""
                        evaluation1="Overdue Due Date - Red If Necessary"
                        evaluation2="Not overdue due date"
                        grade={user.isInstructor ? "" : "Enter Student Grade"}
                        key={course.id}
                        courseID={course.id}
                    />
                ))}
            </div> 
        )
    }

    // This only appears for the instructors and takes them to creating a new course
    function takeToMakeNewClass() {
        // If user.isInstructor is false then that means they are a student; and this function returns nogthing
        if(!user.isInstructor) return;

        const handleClickToNewClass = () => {
            navigate('/createclass')
        }

        // Element that takes the instructor to creating a new class page
        return (
            <div className="row">
                <button onClick={handleClickToNewClass} class="col homepageCourse" style={{textAlign: "left", color: "black", minWidth: "500px", maxWidth: "500px", margin: "10px", borderRadius: "5px" }}>
                    <div style={{margin: "auto"}}>
                        <h2 class="col-10 float-left">Create new Class</h2>

                    </div>
                </button>
            </div>

        )
    }

    // If loading is not done then the page should not try and use the data
    // if this is removed then the data will cause a crash because it would not be set yet
    if (loadingCourse || loadingUser) {
        return <div>Loading courses...</div>; 
    }

    // if there are no courses then tell user that, while still showing the option to create a new class
    if(courses == null || courses.length === 0){
        return (
            <div>
                <div>No Courses...</div>
                {takeToMakeNewClass()}
            </div>
        )

    }

    // Shows the course boxes and creating a new class
    return (
        <div className="col">
            {showCourseBoxes()}
            {takeToMakeNewClass()}
        </div>
    );
}

export default HomePage;
