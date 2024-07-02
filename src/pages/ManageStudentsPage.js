import React, { useState, useEffect } from "react";
import TitleBar from '../components/TitleBar';
import AddStudentForm from '../components/AddStudentForm';
import RemoveStudentTable from '../components/RemoveStudentTable';

const ManageStudentsPage = () => {
    // setStudents to update the student list and students as what is shows
    const [students, setStudents] = useState([]);
    //The useEffect hook in React allows you to perform side effects in function components.
    // A side effect refers to any operation or action that affects something outside the scope of a pure function
    useEffect(() => {
        // Simulate fetching data from a server until we have the DB so that we can fetch from there
        // Used async call here to not stop loading the page due to connection to DB
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
            // To setup the students shows
            setStudents(data);
        };
        fetchStudents();
    }, []);

    const handleAddStudent = (newStudent) => {
        // Used to update the list shown, Will have to add the logic for adding to the DB later
        setStudents([...students, newStudent]);
    };

    const handleRemoveSelected = (selectedStudentIds) => {
        // Used to update the list shown, Will have to add the logic for removing from the DB later
        setStudents(students.filter(student => !selectedStudentIds.includes(student.studentId)));
    };

    return (
        <div className="col" style={{ height: '80vh', display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Manage Student Page" type="main" />

            <div style={{ display: 'flex', justifyContent: 'flex-start', flex: 1, marginTop: '2%' }}>
                <AddStudentForm onAddStudent={handleAddStudent} />
                <RemoveStudentTable students={students} onRemoveSelected={handleRemoveSelected} />
            </div>
        </div>
    );
};

export default ManageStudentsPage;
