import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './FooterForGeneric';

// children: represents any nested components or elements that are passed to GenericPage when it is used
// minHeight: '100vh' =  minimum height of the div to 100% of the viewport height
// d-flex: bootstrap class that applies Flexbox display to the element
// flex-grow-1: bootstrap class that allows the div to grow and take up the remaining space available in the flex container
// p-3: bootstrap class that applies padding of 3 units to all sides of the div
const GenericPage = ({ children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}> 
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

