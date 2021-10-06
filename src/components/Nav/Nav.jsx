import React, {useState} from 'react';
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar';
import cross from "../../assets/images/black-cross.png"
import hamburger from "../../assets/images/menu-icon.png"
import BeerFilter from '../BeerFilter/BeerFilter';


  const Nav = (props) => {
    const {placeholder, searchTerm, handleInput, handleHighABVClick, handleClassicRangeClick, handleAcidicClick} = props

    return (


    
    <nav className="sideNav">
      <SearchBar placeholder={placeholder} searchTerm={searchTerm} handleInput={handleInput}/>
      <BeerFilter handleAcidicClick={handleAcidicClick} handleClassicRangeClick={handleClassicRangeClick} handleHighABVClick={handleHighABVClick}/>
      <img className="menu-cross"src={cross} alt="cross" />
      <img className="hamburger"src={hamburger} alt="menu" />
    </nav>

    )
};

export default Nav;