import React from 'react';


function OverallJustification(){
    return (
    <div class="col" style={{textAlign: "left", border: "1px solid black", borderRadius: "5px", padding: "1%", marginBottom: "20px", backgroundColor: "rgb(194, 237, 255)"}}>
        <h5>Overall Justification</h5>
        <p>Please give a few reasons for the numbered answers listed above.</p>

        <label for="StudentResponse" class="form-label">Student Justification:</label>
        <textarea class="w-100" type="text" id="StudentResponse" name="StudentResponse" rows="2"></textarea>
    </div>
   );
}


export default OverallJustification;