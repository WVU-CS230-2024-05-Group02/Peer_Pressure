import React, { useState, useEffect } from "react";
import TitleBar from '../components/TitleBar';
import AddStudentForm from '../components/AddStudentForm';
import RemoveStudentTable from '../components/RemoveStudentTable';
import RemoveStudentForm from "../components/RemoveStudentForm";
import EditStudentForm from "../components/EditStudentForm";
import { useNavigate } from 'react-router-dom';

const ManageStudentsPage = () => {
    const navigate = useNavigate();

    const [course, setCurrentCourse] = useState(null);
    const [loadingStudents, setLoadingStudents] = useState(true);

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


    function listCurrentStudents(){
        if(loadingStudents){
            return <p>Loading Students...</p>
        }
        else if (course.studentIDs.length === 0){
            return <p>Currently No Students...</p>
        }

        console.log(course.studentIDs.length);
        return (
            <ul>
                <hr/>
                {course.studentIDs.map( (student, index) => (
                    <li key={index}>{student}   -   Group: {course.groupIDs[index]}</li>
                ))}
            </ul> 
        )
    }

    function handleBack(){
        navigate('/course');
    }

    return (
        <div className="container" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Manage Student Page" type="main" />
            <div className="row" style={{ marginTop: '2%' }}>
                <div className="col-lg-6 col-md-12 mb-3" style={{ height: '100%' }}>
                    <AddStudentForm/>
                </div>
                <div className="col-lg-6 col-md-12" style={{ height: '100%' }}>
                    {/* <RemoveStudentTable/> */}
                    <RemoveStudentForm/>
                </div>

                <div className="col-lg-6 col-md-12">
                    <EditStudentForm/>
                </div>


                <div className="col-lg-6 col-md-12">
                <div className="card" style={{ padding: '20px', height: '100%' }}>
                    <TitleBar title="Current Students In Course" type="sub" />
                    {listCurrentStudents()}
                </div>
                </div>

                <hr/>
                <button onClick={handleBack}>Go Back</button>
               
            </div>

            <hr/>
            <hr/>


        </div>
    );
};

export default ManageStudentsPage;
