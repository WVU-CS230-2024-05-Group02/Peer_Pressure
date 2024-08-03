import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import Footer from '../components/Footer.js';

// children: represents any nested components or elements that are passed to GenericPage when it is used

// The wrapper used to show certain pages in the generic page style
// An element wrapped in this like: <GenericPage><Element/></GenericPage> will have the common style applied
// The style adds a navbar-logo linked to home page, side bar-signout button and footer for extra details
const GenericPage = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="content flex-grow-1 p-3">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenericPage;

