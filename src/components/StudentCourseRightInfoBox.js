import React from "react";

// The info boxes on the right side of student course page
function StudentCourseRightInfoBox(props){

    //props data fields
    // leftHeader - rightHeader - infoInside
    let grayBlue = "#e5f3f9";

    let rightSideCards = {
        backgroundColor: grayBlue, 
        borderRadius: "5px", 
        padding: '1rem', 
        border: "1px solid black",
        marginTop: "20px",
    };



    const showInfo = () => {
        return (
            <div style={{padding: "0px", margin: "0px"}}>
                {props.infoInside.map(line => (
                    <p class="text-start" style={{marginBottom: "8px"}}>{line}</p>
                ))}

            </div>
        )
    }

    


    return(
        <div style={rightSideCards}> 
                    
            <div class="row" style={{marginBottom: "10px"}}>
                <div class="col-lg-5">                    
                    <h5 class="float-left">{props.leftHeader}</h5>
                </div>
                <div class="col-lg-7">
                    <h5 class="float-right">{props.rightHeader}</h5>
                </div>
            </div>

            {showInfo()}

        </div>
    );
}

export default StudentCourseRightInfoBox;