import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Peer Pressure</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/evaluations" className="nav-link" activeClassName="active">Evaluations</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/grades" className="nav-link" activeClassName="active">Grades</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/course" className="nav-link" activeClassName="active">Course</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
