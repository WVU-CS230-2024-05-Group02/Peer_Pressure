import React, { useEffect, useState } from 'react';
import HomeCourseBox from '../components/HomeCourseBox';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [courses, setCourses] = useState(null);

    const [loadingCourse, setLoading] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
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

        // fetchInstructor();
        // fetchStudent();

    }, []);

    

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

    function takeToMakeNewClass() {
        if(!user.isInstructor) return;

        const handleClickToNewClass = () => {
            navigate('/createclass')
        }

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

    // Display loading indicator while fetching data
    if (loadingCourse || loadingUser) {
        return <div>Loading courses...</div>; 
    }

    if(courses == null || courses.length === 0){
        return <div>No Courses...</div>
    }

    return (
        <div className="col">
            {showCourseBoxes()}
            {takeToMakeNewClass()}
        </div>
    );
}

export default HomePage;
