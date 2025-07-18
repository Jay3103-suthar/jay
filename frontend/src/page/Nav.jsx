import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import a from '../img/3.png';
import './Nav.css';
import 'remixicon/fonts/remixicon.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="img1">
        <img src={a} alt="Logo" />
      </div>

      <div className={`text ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="home" onClick={closeMenu}><h6>Home</h6></Link>
        <Link to="/about" className="about" onClick={closeMenu}><h6>About</h6></Link>
        <Link to="/menu" className="menu" onClick={closeMenu}><h6>Menu</h6></Link>
         <Link to="/services" className="service" onClick={closeMenu}><h6>Cart</h6></Link>
        <Link to="/offer" className="menu" onClick={closeMenu}><h6>Offers</h6></Link>
        <Link to="/contact" className="contact" onClick={closeMenu}><h6>Feedback</h6></Link>
      </div>

      <button className="menu1" onClick={toggleMenu} aria-label="Toggle menu">
        <i className="ri-menu-line"></i>
      </button>
    </nav>
  );
}
