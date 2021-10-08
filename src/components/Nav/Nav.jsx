import React, {useState} from 'react';
import "./Nav.scss"
import SearchBar from '../SearchBar/SearchBar';
import cross from "../../assets/images/black-cross.png"
import hamburger from "../../assets/images/menuWhite.png"
import BeerFilter from '../BeerFilter/BeerFilter';
import NavMenu from '../NavMenu/NavMenu';



  const Nav = (props) => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
      setShowNav(!showNav);
    };
    


    const {placeholder, searchTerm, handleInput, handleHighABVClick, handleClassicRangeClick, handleAcidicClick, handleAllBeersClick} = props

    return (
    
    <nav className="sideNav">
      {showNav && <NavMenu toggleNav={toggleNav} />}
      <SearchBar className="sideNav__SearchBar" placeholder={placeholder} searchTerm={searchTerm} handleInput={handleInput}/>
      <BeerFilter className="sideNav__BeerFilter"handleAcidicClick={handleAcidicClick} handleClassicRangeClick={handleClassicRangeClick} handleHighABVClick={handleHighABVClick} handleAllBeersClick={handleAllBeersClick}/>
      <img className="menu-cross"src={cross} alt="cross" />
      <img className="hamburger"src={hamburger} alt="menu" onClick={toggleNav}/>
    </nav>

    )
};

export default Nav;