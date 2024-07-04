import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarButton from './SidebarButton';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleSignOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
     <div className="sidebar-container">
      {user && user.type === 'student' && (
        <>
          <SidebarButton text="Home page" onClick={() => navigate('/home')} />
          <SidebarButton text="Courses" onClick={() => navigate('/course')} />
          <SidebarButton text="Evaluations" onClick={() => navigate('/evaluations')} />
        </>
      )}
      {user && user.type === 'instructor' && (
        <>
          <SidebarButton text="Home page" onClick={() => navigate('/home')} />
          <SidebarButton text="Create Questions" onClick={() => navigate('/questionspage')} />
          <SidebarButton text="Create Class" onClick={() => navigate('/createclass')} />
          <SidebarButton text="Manage Students" onClick={() => navigate('/managestudents')} />
          <SidebarButton text="Courses" onClick={() => navigate('/course')} />
          <SidebarButton text="Evaluations" onClick={() => navigate('/evaluations')} />
        </>
      )}
        <div className="sidebar-signout-wrapper">
          <button className="sidebar-signout-button" onClick={handleSignOut}>Sign Out</button>
        </div>
     </div>
  );
};

export default Sidebar;
