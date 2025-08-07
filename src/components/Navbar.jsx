import { Link } from 'react-router-dom';

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">KAIZEN PAY</div>
      <ul className="nav-links">
        <li>Products</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Contact</li>
      </ul>
      <div className="nav-buttons">
  <Link to="/login" className="btn login">Login</Link>
  <Link to="/signup" className="btn signup">Sign up</Link>
</div>

    </nav>
  );
}

export default Navbar;
