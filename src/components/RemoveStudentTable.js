import React, { useState } from "react";
import TitleBar from './TitleBar';

const RemoveStudentTable = ({ students, onRemoveSelected }) => {
    // Used for tracking the students that are selected
    const [selectedStudents, setSelectedStudents] = useState([]);
    //Used for paginating the page of students shown and default to the first page
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 4; // Number of students per page

    const handleSelect = (studentId) => {
        setSelectedStudents(prevState =>
            prevState.includes(studentId)
            ? prevState.filter(id => id !== studentId)
            : [...prevState, studentId]
        );
    };

    // To call the parent function to remove and update the page
    const handleRemoveSelected = () => {
        onRemoveSelected(selectedStudents);
        setSelectedStudents([]);
    };

    // Get current students for the page
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

    // Change page of the students
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="col-lg-6" style={{ paddingLeft: '5%', paddingRight: '3%', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Remove Student" type="sub" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                {students.length > 0 ? (
                    <div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style={{ padding: '8px' }}>Student ID</th>
                                    <th style={{ padding: '8px' }}>First Name</th>
                                    <th style={{ padding: '8px' }}>Last Name</th>
                                    <th style={{ padding: '8px' }}>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentStudents.map(student => (
                                    <tr key={student.studentId}>
                                        <td style={{ padding: '8px' }}>
                                            <input
                                                type="checkbox"
                                                checked={selectedStudents.includes(student.studentId)}
                                                onChange={() => handleSelect(student.studentId)}
                                            />
                                        </td>
                                        <td style={{ padding: '8px' }}>{student.studentId}</td>
                                        <td style={{ padding: '8px' }}>{student.firstName}</td>
                                        <td style={{ padding: '8px' }}>{student.lastName}</td>
                                        <td style={{ padding: '8px' }}>{student.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={handleRemoveSelected} style={{ marginTop: '10px', alignSelf: 'flex-start', height: '40px' }}>
                            Remove Selected Students
                        </button>
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            {Array.from({ length: Math.ceil(students.length / studentsPerPage) }, (_, index) => (
                                <a
                                    key={index + 1}
                                    onClick={() => paginate(index + 1)}
                                    style={{
                                        margin: '0 5px',
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                        color: currentPage === index + 1 ? '#2c3c64' : '#000'
                                    }}
                                >
                                    {index + 1}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No students available.</p>
                )}
            </div>
        </div>
    );
};

export default RemoveStudentTable;
