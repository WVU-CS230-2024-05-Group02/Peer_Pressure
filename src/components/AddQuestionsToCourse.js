import React, { useState } from 'react';

const AddQuestionsToCourse = ({ courseId, onAddQuestion }) => {
    const [prompt, setPrompt] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = { id: Date.now(), prompt, weight };
        // Logic to add question to the database (you can add the API call here)
        console.log(`Adding question to course ${courseId}: ${prompt}, weight: ${weight}`);
        onAddQuestion(newQuestion);
        setPrompt('');
        setWeight('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginRight: '10px' }}>
            <input
                type="text"
                placeholder="Question Prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <button type="submit">Add Question</button>
        </form>
    );
};

export default AddQuestionsToCourse;
