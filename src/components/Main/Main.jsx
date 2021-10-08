import React from 'react';
import "./Main.scss"
import BeerCard from "../BeerCard/BeerCard"
import logoWhite from "../../assets/images/brewDogWhite.png"
import SearchBar from '../SearchBar/SearchBar';

  const Main = (props) => {
    const {beersArr, placeholder, searchTerm, handleInput} = props
    return (
    
      <main>
        <img className="brewDogLogo"src={logoWhite} alt="brewDogLogo"/>
        <SearchBar placeholder={placeholder} searchTerm={searchTerm} handleInput={handleInput}/>
        <section className="beerCards">
          <BeerCard beersArr={beersArr}/>
        </section>
      </main>

    )
};

export default Main;