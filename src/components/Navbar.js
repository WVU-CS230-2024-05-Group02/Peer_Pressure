import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 960);
    if (window.innerWidth > 960) {
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
