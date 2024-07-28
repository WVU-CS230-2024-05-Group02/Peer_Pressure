import React, { useEffect, useState } from 'react';
import HomeCourseBox from '../components/HomeCourseBox';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [user, setUser] = useState(null);
    const [instructor, setInstructor] = useState(null);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        
        const fetchUser = async() => {
            try{
                const response = await fetch('/api/user');
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error("Error Fetching User Data: ", err);
            }
        };
        
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
        
        fetchStudent()
        fetchInstructor()
        fetchUser()
    }, []);
  
    const processData = () => {
        if(user) {
            console.log('User Name: ' + user.username);
            console.log('User email: ' + user.email);
            console.log('User PW: ' + user.password);
            console.log('User II: ' + user.isInstructor);
       
            // Student
            if(!user.isInstructor) {
                console.log("User Courses: " + student.courseID);
                console.log("User Groups: " + student.groupID);
            } else {
                console.log("User ID: " + instructor.userId)
                console.log("User Course Instructor: " + instructor.courseID)
            }
        } 

    }

    processData();

    return (
        <div className="row">
        
            <HomeCourseBox
                title="Software Engineering"
                description="Teaches the fundamentals of software engineering through web app development."
                groupNumber="3"
                evaluation1="Overdue Due Date - Red If Necessary"
                evaluation2="Not overdue due date"
                grade="99"
            />
        </div>
    );
}

export default HomePage;
