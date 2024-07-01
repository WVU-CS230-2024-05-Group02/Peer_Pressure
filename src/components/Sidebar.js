import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarButton from './SidebarButton'; 

const Sidebar = () => {
  return (
    <div className="sidebar bg-light d-flex flex-column align-items-start p-3">
      <SidebarButton text="Sidebar Button 1" />
      <SidebarButton text="Sidebar Button 2" />
      <SidebarButton text="Sidebar Button 3" />
      <SidebarButton text="Sidebar Button 4" />
      <button className="btn btn-danger mt-auto">Sign Out</button>
    </div>
  );
};

export default Sidebar;
