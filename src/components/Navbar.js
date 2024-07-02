import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
    <nav className="navbar">
      <div className='navbar-container'>
        <Link to='/' classNmae='navbar-logo'>
          <img src="/PeerPressureLogo.png" alt="Peer Pressure Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          PEER PRESSURE <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas-fa-times': 'fa-solid fa-bars'} />
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
