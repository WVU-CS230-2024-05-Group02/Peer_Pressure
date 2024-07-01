import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// accepts 'text' as a prop
const SidebarButton = ({ text }) => {
  return (
    // btn btn-primary btn-block mb-3 suppose to display the text prop inside the button
    <button className="btn btn-primary btn-block mb-3">
      {text}
    </button>
  );
};

export default SidebarButton;
