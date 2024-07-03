import React from "react";
import '../App.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar.js';
import Footer from '../components/Footer.js';

function CreateClassPage(){
    return(
        <div>
             <Navbar />
            <Sidebar className="sidebar" />
            <Footer className="footer" />


        </div>
    );
}

export default CreateClassPage;