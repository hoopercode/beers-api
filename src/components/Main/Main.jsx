import React from 'react';
import "./Main.scss"
import BeerCard from "../BeerCard/BeerCard"
import logo from "../../assets/images/brewDogLogo.png"
import logoWhite from "../../assets/images/brewDogWhite.png"

  const Main = (props) => {
    const {beersArr} = props
    return (
    
      <main>
        <img className="brewDogLogo"src={logoWhite}/>
        <section className="beerCards">
          <BeerCard beersArr={beersArr}/>
        </section>
      </main>

    )
};

export default Main;