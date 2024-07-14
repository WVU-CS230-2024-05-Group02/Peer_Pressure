import React, { useState } from "react";
import TitleBar from './TitleBar';

const AddStudentForm = ({ onAddStudent }) => {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentId: '',
        group: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.firstName && student.lastName && student.email && student.studentId && student.group) {
            onAddStudent(student);
            setStudent({ firstName: '', lastName: '', email: '', studentId: '', group: '' });
        } else {
            alert("All fields are required!");
        }
    };

    return (
        <div className="card" style={{ padding: '20px', height: '100%' }}>
            <TitleBar title="Add Student" type="sub" />
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={student.firstName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Student ID:</label>
                    <input
                        type="text"
                        name="studentId"
                        value={student.studentId}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Group:</label>
                    <select
                        name="group"
                        value={student.group}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select Group</option>
                        <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group 3</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudentForm;
