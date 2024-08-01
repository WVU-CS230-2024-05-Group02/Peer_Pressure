import React, { useState, useEffect } from 'react';
import TitleBar from '../components/TitleBar';
import CourseDropDown from '../components/CourseDropDown';
import AddQuestionsToCourse from '../components/AddQuestionsToCourse';
import ViewCourseQuestions from '../components/ViewCourseQuestions';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [loadingCourse, setLoadingCourse] = useState(true);

    const [questions, setQuestions] = useState(null);
    const [loadingQuestions, setLoadingQuestions] = useState(true);
    
    // Get the course
    useEffect(() => {
        const fetchCourses = async() => {
            try {
                const response = await fetch("/api/currentCourse");
                const data = await response.json();

                setCourse(data);
            } catch (err) {
                console.error("Error fetching courses data: ", err)
            } finally {
                setLoadingCourse(false);
            }
        }
        const fetchQuestions = async() => {
            try {
                const response = await fetch("/api/currentQuestions");
                const data = await response.json();

                setQuestions(data);
            } catch (err) {
                console.error("Error fetching courses data: ", err)
            } finally {
                setLoadingQuestions(false);
            }
        }


        fetchQuestions();
        fetchCourses();
    }, []);


    if(loadingCourse || loadingQuestions){
        return (
            <p>Loading Course Info...</p>
        )
    }


    const listCurrentQuestions = () => {
        
        if(questions == null) {
            return (<p>No questions yet</p>)
        }
        
        return (
            <ul>
                {questions.map(q => (
                    <li style={{textAlign: "left"}}>{q}</li>
                ))}
            </ul>
        )
    }

    function handleBack(){
        navigate('/course');
    }

    return (
        <div style={{justifyContent: 'center'}}>
            <div className="col" style={{maxWidth: '1200px', display: 'flex', flexDirection: 'column' }}>
                <TitleBar title={"Questions Page For: " + course.title} type="main" />
                <div className="row">
                    
                    <form style={{textAlign: "left", marginTop: "10px"}} method="post" action="/api/createEvaluation">
                        <hr/>
                    
                            <AddQuestionsToCourse/>

                            <hr/>

                            <div className="col-lg-6 col-md-12">
                            <div className="card" style={{ padding: '20px', minWidth: '800px'}}>
                                <TitleBar title="Current Questions in Evaluation" type="sub" />
                                <hr></hr>
                                {listCurrentQuestions()}
                            </div>
                            </div>
                    
                        <hr/>
                        
                        
                        <label for="title">Title</label>
                        <input name="title"/>
                        
                        <label for="description">Description</label>
                        <input name="description"/>

                        <label for="date">Due Date</label>
                        <input name="date" type="date"/>


                        <hr/>

                        <button type="submit">Send Out Evaluation</button>
                    </form>

                    <button style={{marginTop: '10px'}} onClick={handleBack} type="submit">Cancel/Go Back</button>

                    
                </div>
            </div>
        </div>
        
    );
};

export default QuestionsPage;