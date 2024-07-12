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


    if(props.infoInside.length > 5){
        props.infoInside[5] = "..."
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

            {/* Maxed at size 5 */}
            <div style={{padding: "0px", margin: "0px"}}>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[0]}</p>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[1]}</p>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[2]}</p>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[3]}</p>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[4]}</p>
                <p class="text-start" style={{marginBottom: "8px"}}>{props.infoInside[5]}</p>
            </div>

        </div>
    );
}

export default StudentCourseRightInfoBox;