import React from "react";
import '../App.css';
import Textbox from "../components/Textbox"

function NewCourseForm(){
    return(
        <div className="new-course-card">
            <h2>New Course</h2>
                <form className="course-form">
                    <input
                        className="create-class-textbox"
                        type="text"
                        id="course-name"
                        name="course"
                        placeholder="Course Name"
                    />
                    
                    <input
                        className="create-class-textbox"
                        type="number"
                        id="section-number"
                        name="sectionNumber"
                        placeholder="Section Number"
                    />

                    <input 
                        className="create-class-textbox"
                        type="number"
                        id="num-of-groups"
                        name="numOfGroups"
                        placeholder="# of Groups"
                    />
                    <div>
                        <label for="color">Class color: </label>
                        <input 
                        className="class-color-selector exclude"
                        type="color"
                        name="color"
                        placeholder="sus"
                        />
                    </div>

                    <div>
                        <button className="create-course-button">+ Create Course</button>
                    </div>

                    <div>
                        {/* non-functional obviously */}
                        <a href="about:blank">Import from eCampus</a>
                    </div>
            </form>
        </div>
    );
}

export default NewCourseForm;