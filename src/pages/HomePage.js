import React, { useEffect, useState } from 'react';
import HomeCourseBox from '../components/HomeCourseBox';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [user, setUser] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState(null);

    const [loadingCourse, setLoading] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        

        
        const fetchInstructor = async() => {
            try{
                const response = await fetch('/api/instructor');
                const data = await response.json();
                setInstructor(data);
            } catch (err) {
                console.error("Error Fetching User Data: ", err);
            }
        };

        const fetchStudent = async() => {
            try{
                const response = await fetch('/api/student');
                const data = await response.json();
                setStudent(data);
            } catch (err) {
                console.error("Error Fetching User Data: ", err);
            }
        };

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
            <div>
                {courses.map(course => (
                    <HomeCourseBox
                        title={course.title}
                        description=""
                        groupNumber="3"
                        evaluation1="Overdue Due Date - Red If Necessary"
                        evaluation2="Not overdue due date"
                        grade={user.isInstructor ? "" : "Would put in student's grade"}
                        key={course.id}
                    />
                ))}
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
        <div className="row">
            {showCourseBoxes()}
        </div>
    );
}

export default HomePage;
