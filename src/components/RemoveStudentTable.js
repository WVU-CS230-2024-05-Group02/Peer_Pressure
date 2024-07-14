import React, { useState } from "react";
import TitleBar from './TitleBar';

const RemoveStudentTable = ({ students, onRemoveSelected }) => {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 4;

    const handleSelect = (studentId) => {
        setSelectedStudents(prevState =>
            prevState.includes(studentId)
            ? prevState.filter(id => id !== studentId)
            : [...prevState, studentId]
        );
    };

    const handleRemoveSelected = () => {
        onRemoveSelected(selectedStudents);
        setSelectedStudents([]);
    };

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="card" style={{ padding: '20px', height: '100%' }}>
            <TitleBar title="Remove Student" type="sub" />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden' }}>
                {students.length > 0 ? (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                        <table className="table table-striped" style={{ flex: '1 0 auto', marginBottom: '0' }}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style={{ width: '10%' }}>Student ID</th>
                                    <th style={{ width: '20%' }}>First Name</th>
                                    <th style={{ width: '20%' }}>Last Name</th>
                                    <th style={{ width: '30%' }}>Email</th>
                                    <th style={{ width: '20%' }}>Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentStudents.map(student => (
                                    <tr key={student.studentId}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedStudents.includes(student.studentId)}
                                                onChange={() => handleSelect(student.studentId)}
                                            />
                                        </td>
                                        <td>{student.studentId}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <select className="form-control">
                                                <option value="">Select Group</option>
                                                <option value="Group 1">Group 1</option>
                                                <option value="Group 2">Group 2</option>
                                                <option value="Group 3">Group 3</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                            <button onClick={handleRemoveSelected} className="btn btn-danger">Remove Selected Students</button>
                            <div className="pagination">
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
                    </div>
                ) : (
                    <p>No students available.</p>
                )}
            </div>
        </div>
    );
};

export default RemoveStudentTable;
