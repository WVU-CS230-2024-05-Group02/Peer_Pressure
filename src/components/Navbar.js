import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
            <img src="/PeerPressureLogo.png" alt="Peer Pressure Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            PEER PRESSURE
          </Link>
          <div className='navbar__menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            <li className='navbar__item'>
              <Link to='/home' className='navbar__links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navbar__item'>
              <Link to='/alert' className='navbar__links' onClick={closeMobileMenu}>
                Alerts
              </Link>
            </li>
            <li className='navbar__item'>
              <Link to='/grades' className='navbar__links' onClick={closeMobileMenu}>
                Grades
              </Link>
            </li>
            <li className='navbar__item'>
              <Link to='/course' className='navbar__links' onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

