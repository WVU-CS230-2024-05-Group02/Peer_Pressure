import react from "react";

function QuestionResponse(props){

    // props inputs:
    // title - description - justification (if justification is allowed or not)

    if(props.justification){
        return (
            <div class="col" style={{border: "1px solid black", borderRadius: "5px", padding: "1%", marginBottom: "20px"}}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
    
                <div class="form-group">
                <label for="numberAnswer" class="form-label">Answer From 1-10: </label>  <br/>
                    <select class="form-control" id="numberAnswer">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </select>
                </div>
    
                <label for="StudentResponse" class="form-label">Student Justification:</label>
                <textarea class="w-100" type="text" id="StudentResponse" name="StudentResponse" rows="2"></textarea>
            </div>
        );
    } 
    else {
        return (
            <div class="col" style={{border: "1px solid black", borderRadius: "5px", padding: "1%", marginBottom: "20px"}}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
    
                <div class="form-group">
                <label for="numberAnswer" class="form-label">Answer From 1-10: </label>  <br/>
                    <select class="form-control" id="numberAnswer">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </select>
                </div>
            </div>
        );
    }



}





export default QuestionResponse;