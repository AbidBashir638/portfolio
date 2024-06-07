import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
          <img className='logo' src='assests/image/logo.jpg' alt="Logo" />
          <ul>
            <li>
              <a href="#" className="menu-item">Home</a>
            </li>
            <li>
              <a href="#" className="menu-item">Skills</a>
            </li>
            <li>
              <a href="#" className="menu-item">Work experience</a>
            </li>
            <li>
              <a href="#" className="menu-item">Contact me</a>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => {}}>
            Hire me
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

