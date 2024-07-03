import React, { useState } from 'react';

const ViewCourseQuestions = ({ questions }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h3>Questions for Course</h3>
            <ul>
                {currentQuestions.map(question => (
                    <li key={question.id}>{question.prompt} (Weight: {question.weight})</li>
                ))}
            </ul>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <a
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        style={{
                            margin: '0 5px',
                            cursor: 'pointer',
                            textDecoration: currentPage === index + 1 ? 'underline' : 'none'
                        }}
                    >
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ViewCourseQuestions;
