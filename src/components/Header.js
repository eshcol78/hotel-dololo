import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Hotel Dololo</div>
        <nav>
          <ul className="nav-links">
            <li><HashLink smooth to="/#home">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About</HashLink></li>
            <li><HashLink smooth to="/#rooms">Rooms</HashLink></li>
            <li><HashLink smooth to="/#amenities">Amenities</HashLink></li>
            <li><HashLink smooth to="/#gallery">Gallery</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
