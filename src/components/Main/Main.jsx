import React from 'react';
import "./Main.scss"
import BeerCard from "../BeerCard/BeerCard"

  const Main = (props) => {
    const {beersArr} = props
    return (
    
      <main>
        <section className="beerCards">
          <BeerCard beersArr={beersArr}/>
        </section>
      </main>

    )
};

export default Main;