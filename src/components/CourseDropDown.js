import React, { useState, useEffect } from 'react';

// Mock function to simulate fetching data from a database
const fetchCourses = () => {
    return Promise.resolve([
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
        { id: 3, name: 'Course 3' },
    ]);
};

const CourseDropDown = ({ onSelect }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses().then(data => setCourses(data));
    }, []);

    return (
        <select onChange={(e) => onSelect(e.target.value)} style={{ marginRight: '10px' }}>
            <option value="">Select a course</option>
            {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
            ))}
        </select>
    );
};

export default CourseDropDown;
