import React from 'react';
import logo from '../images/ironhack-logo-xs.png';
import menutop from '../images/menu-top-xs.png';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-top">
        <img src={logo} className=" ironhack-logo" alt="logo" />
        <img src={menutop} className=" menu-top" alt="menu" />
      </div>
    </nav>
  );
};

export default Navbar;
