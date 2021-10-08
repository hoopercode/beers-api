import React from 'react';
import "./Main.scss"
import BeerCard from "../BeerCard/BeerCard"
import logoWhite from "../../assets/images/brewDogWhite.png"

  const Main = (props) => {
    const {beersArr} = props
    return (
    
      <main>
        <img className="brewDogLogo"src={logoWhite} alt="brewDogLogo"/>
        <section className="beerCards">
          <BeerCard beersArr={beersArr}/>
        </section>
      </main>

    )
};

export default Main;