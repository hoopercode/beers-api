import React from 'react';
import "./Nav.scss"


  const Nav = () => {
    return (
    
    <nav className="sideNav">
      <input type="text" placeholder="Search" />
      <a href="#about">High ABV &#40;&#60;6.0%&#41;</a>
      <a href="#services">Classic Range</a>
      <a href="#clients">Acidic &#40;ph&#60;4&#41;</a>
    </nav>
    )
};

export default Nav;