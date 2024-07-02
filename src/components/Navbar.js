import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "../App.css";


function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <img src="/PeerPressureLogo.png" alt="Peer Pressure Logo" />
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas-fa-times': 'fa-solid fa-bars'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
