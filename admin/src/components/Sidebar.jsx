import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../img/3.png';


export default function TopbarAdmin() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="admin-nav">
      <div className="admin-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`admin-links ${menuOpen ? 'show' : ''}`}>
        <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
        <NavLink to="/orders" onClick={closeMenu}>Orders</NavLink>
        <NavLink to="/menu" onClick={closeMenu}>Menu Manager</NavLink>
        <NavLink to="/offers" onClick={closeMenu}>Offers</NavLink>
        <NavLink to="/Booking" onClick={closeMenu}>Booking</NavLink>
        <NavLink to="/login" onClick={closeMenu}>Logout</NavLink>
      </div>

      <button className="admin-toggle" onClick={toggleMenu}>
        <i className="ri-menu-line"></i>
      </button>
    </nav>
  );
}
