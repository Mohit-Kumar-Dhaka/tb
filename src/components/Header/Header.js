import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header-new">

      <nav className="header-nav-left">
        <a href="#about" >About Us</a>
        <a href="#events" >Events</a>
        <a href="#speakers">Team</a>
      </nav>

      
      <div className="header-logo">
        
        <a href="/about">
          <h1>TECHBOARD</h1>
        </a>
      </div>


      <div className="header-cta-right">
        <a href="#cta" className="cta-button">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;