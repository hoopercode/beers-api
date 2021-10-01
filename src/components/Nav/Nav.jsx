import React from 'react';
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar';

  const Nav = () => {
    return (
    
    <nav className="sideNav">
      <SearchBar />
      <a href="#about">High ABV &#40;&#60;6.0%&#41;</a>
      <a href="#services">Classic Range</a>
      <a href="#clients">Acidic &#40;ph&#60;4&#41;</a>
    </nav>

    )
};

export default Nav;