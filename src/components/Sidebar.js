/*import React from "react";
import SidebarButton from "./Sidebar.js";

    function Sidebar(){
        return(
            <div className="sidebar">

            </div>
        );
    }

export default Sidebar;
*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SidebarButton from './SidebarButton'; 

const Sidebar = () => {
  return (
    <div className="sidebar bg-light" style={{ backgroundColor: '#e5f3f9', height: '100vh', padding: '1rem' }}>
      <SidebarButton text="Sidebar Button 1" />
      <SidebarButton text="Sidebar Button 2" />
      <SidebarButton text="Sidebar Button 3" />
      <SidebarButton text="Sidebar Button 4" />
      <button className="btn btn-danger mt-5" style={{ backgroundColor: '#2c3c64', borderColor: '#2c3c64' }}>Sign Out</button>
    </div>
  );
};

export default Sidebar;
