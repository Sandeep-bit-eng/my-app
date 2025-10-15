import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Auth<span>App</span></div>

      <ul className="nav-links">
        <li><Link to="/">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
