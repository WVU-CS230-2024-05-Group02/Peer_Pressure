import React, { useState, useEffect } from 'react';
import TitleBar from '../components/TitleBar';
import CourseDropDown from '../components/CourseDropDown';
import AddQuestionsToCourse from '../components/AddQuestionsToCourse';
import ViewCourseQuestions from '../components/ViewCourseQuestions';

// Mock function to simulate fetching questions from a database
const fetchQuestionsForCourse = (courseId) => {
    return Promise.resolve([
        { id: 1, prompt: 'Question 1', weight: 5 },
        { id: 2, prompt: 'Question 2', weight: 3 },
        { id: 3, prompt: 'Question 3', weight: 3 },
        { id: 4, prompt: 'Question 4', weight: 3 },
        { id: 5, prompt: 'Question 5', weight: 3 },
        { id: 6, prompt: 'Question 6', weight: 3 },
    ]);
};

const QuestionsPage = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (selectedCourse) {
            fetchQuestionsForCourse(selectedCourse).then(data => setQuestions(data));
        }
    }, [selectedCourse]);

    const handleAddQuestion = (newQuestion) => {
        setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    };

    return (
        <div className="col" style={{ display: 'flex', flexDirection: 'column' }}>
            <TitleBar title="Questions Page" type="main" />
            <div style={{ display: 'flex', justifyContent: 'flex-start', flex: 1, marginTop: '2%' }}>
                <CourseDropDown onSelect={setSelectedCourse} />
                {selectedCourse && (
                    <>
                        <AddQuestionsToCourse courseId={selectedCourse} onAddQuestion={handleAddQuestion} />
                        <ViewCourseQuestions questions={questions} />
                    </>
                )}
            </div>
        </div>
    );
};

export default QuestionsPage;