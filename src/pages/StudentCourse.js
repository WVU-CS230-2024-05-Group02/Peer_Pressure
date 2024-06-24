import React from 'react';

function StudentCourse(){
    {/*Here goes side by and nav bar before rest*/}

    let evalBackgroundColor = "#e6e6e6";
    let grayBlue = "#e5f3f9";
    let midBlue = "#516182";
    let darkBlue = "#2c3c64";
    let lightBlue = "#8fbeca";
    let gray = "#e6e6e6";

    let rightSideCards = {
        backgroundColor: grayBlue, 
        borderRadius: "5px", 
        padding: '1rem', 
        border: "1px solid black",
        marginTop: "20px",
    }

    let boxShadowEvaluations = "2px 2px 5px rgba(0, 0, 0, 0.3)";
    let titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";

    return ( 

        <div class="col">
            <div class="row" style={{background: darkBlue, paddingTop: "2%", paddingBottom: "2%", paddingLeft: "5%", paddingRight: "5%", boxShadow: titleBarShadow}}>
                <div>   
                    <h2 style={{color: "white"}}> <u>"Title Of The Course" </u> </h2>
                    <h4 style={{color: "white"}}>"Description of the course that should probably have a word limit count on it."</h4>
                </div>
            </div>

            <div class="row"> 

            {/*Title of course and evaluation section*/}
            <div class="col-lg-8" style={{paddingLeft: "5%", paddingRight: "3%", marginTop: "2%"}}>
                
                {/* Overdue Evaluation Section*/}
                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "red"}}> <u>Overdue Evaluations: </u> </h4>

                    {/* All Evaluation Building */}
                    <div class="row justify-content-center" style={{backgroundColor: evalBackgroundColor, border: "1px solid red", borderRadius: "10px", margin: "10px", boxShadow: boxShadowEvaluations}}>
                        
                        <div class="col-sm-2" style={{borderRight: "1px solid red"}}>
                            
                            <div style={{borderBottom: "1px dotted black"}}>
                                <p>Assigned Date: 1/1</p>

                            </div>
                        
                            <p>Due Date: 1/4</p>
                        </div>
                        <div class="col-sm-8">
                            <div class="row h-50 d-flex align-items-center">
                                <h4 class="w-100 text-center">"Evaluation Title"</h4>
                            </div>
                            <div class="row h-50 d-flex align-items-center">
                                <p class="w-100 text-center">"Evaluation Description. Why it is useful?, Why does it need to be known? and Anything Else."</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-2" style={{backgroundColor: grayBlue, borderLeft: "1px solid red", padding:"0px"}}>
                            {/* <p> Answer Evaluation</p> */}
                            <button className="btn btn-primary h-100 w-100" style={{backgroundColor: grayBlue, border: "0px solid red", borderTopLeftRadius: "5px", borderBottomLeftRadius: "0px"}}>
                                <i className="fas fa-arrow-right fa-2x" style={{color: "black"}}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>

                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "green"}}> <u>Active Evaluations: </u> </h4>

                    {/* All Evaluation Building */}
                    <div class="row justify-content-center" style={{backgroundColor: evalBackgroundColor, border: "1px solid green", borderRadius: "10px", margin: "10px", boxShadow: boxShadowEvaluations}}>
                        
                        <div class="col-sm-2" style={{borderRight: "1px solid green"}}>
                            
                            <div style={{borderBottom: "1px dotted black"}}>
                                <p>Assigned Date: 1/1</p>

                            </div>
                        
                            <p>Due Date: 1/4</p>
                        </div>
                        <div class="col-sm-8">
                            <div class="row h-50 d-flex align-items-center">
                                <h4 class="w-100 text-center">"Evaluation Title"</h4>
                            </div>
                            <div class="row h-50 d-flex align-items-center">
                                <p class="w-100 text-center">"Evaluation Description. Why it is useful?, Why does it need to be known? and Anything Else."</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-2" style={{backgroundColor: grayBlue, borderLeft: "1px solid green", padding:"0px"}}>
                            {/* <p> Answer Evaluation</p> */}
                            <button className="btn btn-primary h-100 w-100" style={{backgroundColor: grayBlue, border: "0px solid green", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}>
                                <i className="fas fa-arrow-right fa-2x" style={{color: "black"}}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>


                <div style={{marginBottom: "15px"}}>
                    <h4 class="text-left" style={{color: "yellowgreen"}}> <u>Upcoming Evaluations: </u> </h4>

                    {/* All Evaluation Building */}
                    <div class="row justify-content-center" style={{backgroundColor: evalBackgroundColor, border: "1px solid yellowgreen", borderRadius: "10px", margin: "10px", boxShadow: boxShadowEvaluations}}>
                        
                        <div class="col-sm-2" style={{borderRight: "1px solid yellowgreen"}}>
                            
                            <div style={{borderBottom: "1px dotted black"}}>
                                <p>Assigned Date: 1/1</p>

                            </div>
                        
                            <p>Due Date: 1/4</p>
                        </div>
                        <div class="col-sm-8">
                            <div class="row h-50 d-flex align-items-center">
                                <h4 class="w-100 text-center">"Evaluation Title"</h4>
                            </div>
                            <div class="row h-50 d-flex align-items-center">
                                <p class="w-100 text-center">"Evaluation Description. Why it is useful?, Why does it need to be known? and Anything Else."</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-2" style={{backgroundColor: grayBlue, borderLeft: "1px solid yellowgreen", padding:"0px"}}>
                            {/* <p> Answer Evaluation</p> */}
                            <button className="btn btn-primary h-100 w-100" style={{backgroundColor: grayBlue, border: "0px solid yellowgreen", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}>
                                <i className="fas fa-arrow-right fa-2x" style={{color: "black"}}></i>
                            </button>
                        </div>
                    </div>
                </div>

                <hr style={{backgroundColor: "black", marginTop: "2%", marginBottom: "4%"}}/>

            </div>

            {/*Group, Students, Grades section*/}
            <div class="col-lg-4" style={{backgroundColor: midBlue, borderLeft: "1px solid black"}}>
               
                {/* Course Alerts */}
                <div style={rightSideCards}> 
                    
                    <div class="row" style={{marginBottom: "10px"}}>
                        <div class="col-lg-4">                    
                            <h5 class="float-left">Course Alerts </h5>
                        </div>
                    </div>

                    <div style={{padding: "0px", margin: "0px"}}>
                        <p class="text-start" style={{marginBottom: "8px"}}><b>January, 1st: </b> Any Alerts Received by the student from grades</p>
                        <p class="text-start" style={{marginBottom: "8px"}}><b>January, 1st: </b> Any Alerts Received by an instructor announcement</p>
                    </div>

                </div>

                 {/* My Grades Section */}
                <div style={rightSideCards}> 
                    
                    <div class="row" style={{marginBottom: "10px"}}>
                        <div class="col">                    
                            <h5 class="float-left" style={{marginBottom: "8px"}}>Recent Grades</h5>
                        </div>
                        <div class="col">
                            <h5 class="float-right" style={{marginBottom: "8px"}}>Current Avg: 00</h5>
                        </div>
                    </div>

                    <div>
                        <p class="text-start">"Evaluation Title": "Grade"</p>
                    </div>

                    <p class="text-start">"Evaluation Title": "Grade"</p>
                </div>

                {/* My Group Section */}
                <div style={rightSideCards}> 
                    
                    <div class="row" style={{marginBottom: "10px"}}>
                        <div class="col-lg-4">                    
                            <h5 class="float-left">Group: </h5>
                        </div>
                        <div class="col-lg-8">
                            <h5 class="float-right">"Group Num or Name"</h5>
                        </div>
                    </div>

                    <div style={{padding: "0px", margin: "0px"}}>
                        <p class="text-start" style={{marginBottom: "8px"}}>"Student Name - Student Role"</p>
                        <p class="text-start" style={{marginBottom: "8px"}}>"Student Name - Student Role"</p>
                        <p class="text-start" style={{marginBottom: "8px"}}>"Student Name - Student Role"</p>
                        <p class="text-start" style={{marginBottom: "8px"}}>...</p>
                    </div>

                </div>
            </div>

        </div>
        </div>


        
    );
}


export default StudentCourse;