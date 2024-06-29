import React from "react";

// The title bar on the StudentCourse page
function StudentCourseTitleBar(props){

    //props data fields
    // title - description
    let darkBlue = "#2c3c64";
    let titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";

    return(
        <div class="row" style={{height: "120px", background: darkBlue, paddingTop: "1%", paddingBottom: "2%", paddingLeft: "5%", paddingRight: "5%", boxShadow: titleBarShadow}}>
            <div>   
                <h2 style={{color: "white"}}> <u>{props.title}</u> </h2>
                <h4 style={{color: "white"}}>{props.description}</h4>
            </div>
        </div>
    );
}

export default StudentCourseTitleBar;