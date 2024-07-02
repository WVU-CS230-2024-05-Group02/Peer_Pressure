import React, { useState } from "react";
import TitleBar from './TitleBar';

const AddStudentForm = ({ onAddStudent }) => {
    // Used for tracking the student being added
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentId: ''
    });

    // To handle changing the student value as they change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // To call the parent function to add a student and update the page
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStudent(student);
        setStudent({ firstName: '', lastName: '', email: '', studentId: '' });
    };

    return (
        <div className="col-lg-6" style={{ paddingLeft: '5%', paddingRight: '3%', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Add Student" type="sub" />
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '150px' }}>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={student.firstName}
                            onChange={handleChange}
                            style={{ flex: '1' }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '150px' }}>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={student.lastName}
                            onChange={handleChange}
                            style={{ flex: '1' }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '150px' }}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                            style={{ flex: '1' }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ width: '150px' }}>Student ID:</label>
                        <input
                            type="text"
                            name="studentId"
                            value={student.studentId}
                            onChange={handleChange}
                            style={{ flex: '1' }}
                        />
                    </div>
                </div>
                <button type="submit" style={{ marginTop: '10px', alignSelf: 'flex-start', height: '40px' }}>Add Student</button>
            </form>
        </div>
    );
};

export default AddStudentForm;
