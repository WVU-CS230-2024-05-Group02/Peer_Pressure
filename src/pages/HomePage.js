import React from 'react'
import HomeCourseBox from '../components/HomeCourseBox';

function HomePage(){

    return (
        <div class="row">
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