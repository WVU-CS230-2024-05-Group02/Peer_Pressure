import React, { useState } from 'react';
import '../App.css';
import NewCourseForm from "../components/NewCourseForm"
import { useNavigate } from 'react-router-dom';

function CreateClassPage(){
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/home');

    }

    return(
        <div>
            <NewCourseForm />

            <br/>

            <button onClick={navigateBack}>Cancel/Go Back</button>
        </div>
    );
}

export default CreateClassPage;