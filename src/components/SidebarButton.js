/*import React from "react";

    function SidebarButton(text){
        return(
            <div className="sidebar-button">
                <p>[text]</p>
            </div>
        );
    }

export default SidebarButton;
*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// accepts 'text' as a prop
function SidebarButton({ text }) {
  return (
    // btn btn-primary btn-block mb-3 suppose to display the text prop inside the button
    <button className="btn btn-primary btn-block mb-3" style={{ backgroundColor: '#2c3c64', borderColor: '#2c3c64' }}>
      {text}
    </button>
  );
}

export default SidebarButton;
