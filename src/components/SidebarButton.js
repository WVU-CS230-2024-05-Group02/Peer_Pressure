import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'; 

const SidebarButton = ({ text, onClick }) => {
  return (
    <button className="sidebar-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default SidebarButton;
