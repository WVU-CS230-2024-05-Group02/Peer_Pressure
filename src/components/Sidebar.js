import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarButton from './SidebarButton';
import '../App.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <SidebarButton text="Sidebar Button 1" />
      <SidebarButton text="Sidebar Button 2" />
      <SidebarButton text="Sidebar Button 3" />
      <SidebarButton text="Sidebar Button 4" />
      <div className="sidebar-signout-wrapper">
        <button className="sidebar-signout-button">Sign Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
