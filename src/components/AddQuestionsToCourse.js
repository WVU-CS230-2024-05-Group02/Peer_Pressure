import React, { useState } from 'react';

const AddQuestionsToCourse = () => {
    return (
        <form method="post" action="/api/addquestion" style={{ margin: '10px' }}>
            <input
                type="text"
                placeholder="Question Prompt"
                name="question"
                style={{marginBottom: '10px'}}
            />
            <button type="submit">Add Question</button>
        </form>
    );
};

export default AddQuestionsToCourse;
