import React, { useEffect, useState } from 'react';
import HomeCourseBox from '../components/HomeCourseBox';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            const token = sessionStorage.getItem('token');
            // this means they have not logged in
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                // Here we will make a call to the DB to validate the token with user
                //response will look something like :
                const response = {
                    token: 'fake-jwt-token',
                    isValid: true,
                    user: {
                        name: "John Doe",
                        type: "instructor", // or "student"
                    }
                };
                if (response.isValid) {
                    setIsValid(true);
                } else {
                    throw new Error('Token validation failed');
                }
            } catch (error) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                navigate('/login');
            }
        };

        validateToken();
    }, [navigate]);

    if (!isValid) {
        return <div>Loading...</div>; // Still not sure what should be done
    }

    return (
        <div className="row">
            <HomeCourseBox
                title="Software Engineering"
                description="Teaches the fundamentals of software engineering through web app development."
                groupNumber="3"
                evaluation1="Overdue Due Date - Red If Necessary"
                evaluation2="Not overdue due date"
                grade="99"
            />
        </div>
    );
}

export default HomePage;
