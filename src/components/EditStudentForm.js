import React from "react";
import TitleBar from './TitleBar';

const EditStudentForm = () => {
    return (
        <div className="card" style={{ padding: '20px', height: '100%' }}>
            <TitleBar title="Update Student Group" type="sub" />
            <form action="/api/editstudent" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Group:</label>
                    <select
                        name="group"
                        id="group"
                        className="form-control"
                    >
                        <option value="">Select Group</option>
                        <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group 3</option>
                        <option value="Group 1">Group 4</option>
                        <option value="Group 2">Group 5</option>
                        <option value="Group 3">Group 6</option>
                        <option value="Group 1">Group 7</option>
                        <option value="Group 2">Group 8</option>
                        <option value="Group 3">Group 9</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Edit Student Group</button>
            </form>
        </div>
    );
};

export default EditStudentForm;
