import React from "react";
import '../App.css';
import Textbox from "../components/Textbox"

function NewCourseForm(){
    return(
        <div className="new-course-card">
            <h2>New Course</h2>
                <form action="/api/createcourse" className="course-form" method="post">
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

                    {/* <input 
                        className="create-class-textbox"
                        type="number"
                        id="num-of-groups"
                        name="numOfGroups"
                        placeholder="# of Groups"
                    /> */}

                    {/* <div>
                        <label for="color">Class color: </label>
                        <input 
                        className="class-color-selector exclude"
                        type="color"
                        name="color"
                        placeholder="sus"
                        />
                    </div> */}

                    <button type="submit" className="create-course-button">+ Create Course</button>

           
            </form>
        </div>
    );
}

export default NewCourseForm;