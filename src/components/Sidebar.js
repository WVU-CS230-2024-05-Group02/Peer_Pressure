import React from 'react';

function Sidebar(){
    return(
        <div className="sidebar"> 
            {/*menu button for sliding out the menu (no functionality yet can be added with javascript?)*/}
            <button className="menu-button">&#9776;</button> 
            <h2>Menu</h2>
            
            {/*sidebar buttons for navigation*/}
            <button>My Courses</button> 
            <button>Add Course</button>
            <button>Create new course</button>
            <button>Manage Groups</button>
            <button>My Account</button>

            {/*sign-out button at the bottom*/}
            <button className="sign-out">Sign Out</button> 
        </div>
    );
}



export default Sidebar;


