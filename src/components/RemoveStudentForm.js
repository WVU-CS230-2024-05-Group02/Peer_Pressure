import React from "react";
import TitleBar from './TitleBar';

// This card is in the ManageStudentsPage
// It is used to take in who the instructor wants to remove from the couse and pushes that to the backend
const RemoveStudentForm = () => {
    return (
        <div className="card" style={{ padding: '20px', height: '100%' }}>
            <TitleBar title="Remove Student" type="sub" />
            {/* Takes in who the instructor wants to remove and sends it to the backend */}
            <form action="/api/removestudent" method="post" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Remove Student</button>
            </form>
        </div>
    );
};

export default RemoveStudentForm;
