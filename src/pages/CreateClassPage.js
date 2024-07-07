import React, { useState } from 'react';
import '../App.css';
import NewCourseForm from "../components/NewCourseForm"

function CreateClassPage(){
    return(
        <div>
            <button>+ Add Class</button>
            <NewCourseForm />
        </div>
    );
}

export default CreateClassPage;