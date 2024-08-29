import React from 'react';
import navLogo from "./navlogo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo">
        <a href="#"><img src={navLogo} alt="Logo"/></a>     
      </div>
      <div className="nav-links">
        <a href="#about">About me</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact me</a>
      </div>
    </div>
  );
}

export default Navbar;
