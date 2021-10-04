import React, {useState} from 'react';
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar';
import BeerFilter from '../BeerFilter/BeerFilter';


  const Nav = (props) => {
    const {placeholder, searchTerm, handleInput, handleClick, Acidic, HighABV, ClassicRange} = props

    return (


    
    <nav className="sideNav">
      <SearchBar placeholder={placeholder} searchTerm={searchTerm} handleInput={handleInput}/>
      <BeerFilter handleClick={handleClick} HighABV={HighABV} ClassicRange={ClassicRange} Acidic={Acidic}/>
    </nav>

    )
};

export default Nav;