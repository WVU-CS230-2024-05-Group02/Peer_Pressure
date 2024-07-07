import React from "react";
import '../App.css';
import Textbox from "../components/Textbox"

function NewCourseForm(){
    return(
        <div className="new-course-card">
            <h2>New Course</h2>
                <form className="course-form">
                    <input
                        type="text"
                        id="course-name"
                        name="course"
                        placeholder="Course Name"
                    />
                    
                    <input
                        type="number"
                        id="section-number"
                        name="sectionNumber"
                        placeholder="Section Number"
                        className=""
                    />

                    <input 
                        type="number"
                        id="num-of-groups"
                        name="numOfGroups"
                        placeholder="# of Groups"
                    />

                    <a href="about:blank">Import from eCampus</a>
            </form>
        </div>
    );
}

export default NewCourseForm;