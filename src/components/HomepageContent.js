import React from 'react';

function HomepageContent(){
    return(
        {/*main content section*/}
        <div className="main-content"> 
            {/*header with title and profile/alert buttons*/} 
                <h1>Peer Pressure</h1>
                <div className="header-buttons">
                    <button>Alerts</button>
                    <button>Profile</button>
                </div>
        </div>
   

    );
}

export default HomepageContent;