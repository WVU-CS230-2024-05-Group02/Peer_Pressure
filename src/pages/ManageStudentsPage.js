import React, { useState, useEffect } from "react";
import TitleBar from '../components/TitleBar';
import AddStudentForm from '../components/AddStudentForm';
import RemoveStudentForm from "../components/RemoveStudentForm";
import EditStudentForm from "../components/EditStudentForm";
import { useNavigate } from 'react-router-dom';

// This page allows an instructor to manage who all is in the class that they were in before this page
// The Instructor can add students, remove, edit their groups
const ManageStudentsPage = () => {
    const navigate = useNavigate();

    // Gets the course information
    const [course, setCurrentCourse] = useState(null);
    const [loadingStudents, setLoadingStudents] = useState(true);

    // gets the needed page information from the backend
    useEffect(() => {

        const fetchCurrentCourse = async() => {
            try{
                const response = await fetch('/api/currentCourse');
                const data = await response.json();
                setCurrentCourse(data);
            } catch (err) {
                console.error("Error Fetching User Data: ", err);
            } finally {
                setLoadingStudents(false)
            }
        };

        fetchCurrentCourse();

    }, [])


    // lists out the current students in the course in an unordered list
    function listCurrentStudents(){

        // Do not use the student data if it is not loading - without this there would be an error
        if(loadingStudents){
            return <p>Loading Students...</p>
        }
        // If there are no students no need to map them out into a list
        else if (course.studentIDs.length === 0){
            return <p>Currently No Students...</p>
        }

        
        // maps out the array of students into a list
        return (
            <ul>
                <hr/>
                {course.studentIDs.map( (student, index) => (
                    <li key={index}>{student}   -   Group: {course.groupIDs[index]}</li>
                ))}
            </ul> 
        )
    }

    // Called when the instructor wants to leave the page
    function handleBack(){
        navigate('/course');
    }

    return (
        <div className="container" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Manage Student Page" type="main" />
            <div className="row" style={{ marginTop: '2%' }}>
                
                {/* Where the instructor can add a student to the course */}
                <div className="col-lg-6 col-md-12 mb-3" style={{ height: '100%' }}>
                    <AddStudentForm/>
                </div>

                {/* Card where the instructor can remove a student from the course */}
                <div className="col-lg-6 col-md-12" style={{ height: '100%' }}>
                    {/* <RemoveStudentTable/> */}
                    <RemoveStudentForm/>
                </div>

                {/* Card where the instructor can edit student's group numbers that are already in the course */}
                <div className="col-lg-6 col-md-12">
                    <EditStudentForm/>
                </div>


                {/*Card that displays all of the user emails and their group number */}
                <div className="col-lg-6 col-md-12">
                    <div className="card" style={{ padding: '20px', height: '100%' }}>
                        <TitleBar title="Current Students In Course" type="sub" />
                        {listCurrentStudents()}
                    </div>
                </div>

                <hr/>

                {/* Button to go back to course page */}
                <button onClick={handleBack}>Go Back</button>
               
            </div>

            <hr/>
        </div>
    );
};

export default ManageStudentsPage;
