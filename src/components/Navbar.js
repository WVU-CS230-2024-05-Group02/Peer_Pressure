// import React, {useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
// import { set } from 'react-hook-form';
// import './Navbar.css';
// import { Button } from './Button';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const[button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if(window.innerWidth <= 960){
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);


//   window.addEventListener('resize', showButton);

//   return (
//     <>
//     <nav className="navbar">
//       <div className='navbar-container'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           <img src="/PeerPressureLogo.png" alt="Peer Pressure Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
//           PEER PRESSURE 
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <i className={click ? 'fas-fa-times': 'fa-solid fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-memu'}>
//           <li className='nav-item'>
//             <link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Button1
//             </link>
//           </li>
//           <li className='nav-item'>
//             <link to='/button2' className='nav-links' onClick={closeMobileMenu}>
//               Button2
//             </link>
//           </li>
//           <li className='nav-item'>
//             <link to='/button3' className='nav-links' onClick={closeMobileMenu}>
//               Button3
//             </link>
//           </li>
//           <li className='nav-item'>
//             <link to='/sign-out' className='nav-links-mobile' onClick={closeMobileMenu}>
//               Sign Out
//             </link>
//           </li>
//         </ul>
//         {button && <Button buttonStyle='btn--outline'>SIGN OUT</Button>}
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
// import "../App.css";


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          <img src="/PeerPressureLogo.png" alt="Peer Pressure Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          PEER PRESSURE
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setClick(!click)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${click ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/evaluations" className="nav-link">Evaluations</Link>
            </li>
            <li className="nav-item">
              <Link to="/grades" className="nav-link">Grades</Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link">Course</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
