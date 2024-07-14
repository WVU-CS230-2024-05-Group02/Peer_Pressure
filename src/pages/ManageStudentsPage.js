import React, { useState, useEffect } from "react";
import TitleBar from '../components/TitleBar';
import AddStudentForm from '../components/AddStudentForm';
import RemoveStudentTable from '../components/RemoveStudentTable';

const ManageStudentsPage = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            const data = [
                { firstName: 'John1', lastName: 'Doe', email: 'john.doe@example.com', studentId: '1' },
                { firstName: 'John2', lastName: 'Doe', email: 'john.doe@example.com', studentId: '2' },
                { firstName: 'John3', lastName: 'Doe', email: 'john.beam@example.com', studentId: '3' },
                { firstName: 'John4', lastName: 'Doe', email: 'john.beam@example.com', studentId: '4' },
                { firstName: 'John5', lastName: 'Doe', email: 'john.beam@example.com', studentId: '5' },
                { firstName: 'John6', lastName: 'Doe', email: 'john.beam@example.com', studentId: '6' },
                { firstName: 'John7', lastName: 'Doe', email: 'john.beam@example.com', studentId: '7' },
            ];
            setStudents(data);
        };
        fetchStudents();
    }, []);

    const handleAddStudent = (newStudent) => {
        setStudents([...students, newStudent]);
    };

    const handleRemoveSelected = (selectedStudentIds) => {
        setStudents(students.filter(student => !selectedStudentIds.includes(student.studentId)));
    };

    return (
        <div className="container" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Manage Student Page" type="main" />
            <div className="row" style={{ marginTop: '2%' }}>
                <div className="col-lg-6 col-md-12 mb-3" style={{ height: '100%' }}>
                    <AddStudentForm onAddStudent={handleAddStudent} />
                </div>
                <div className="col-lg-6 col-md-12" style={{ height: '100%' }}>
                    <RemoveStudentTable students={students} onRemoveSelected={handleRemoveSelected} />
                </div>
            </div>
        </div>
    );
};

export default ManageStudentsPage;
