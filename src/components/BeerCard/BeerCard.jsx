

import React from 'react';

import "./BeerCard.scss"

const BeerCard = (props) => {

    const { beersArr } = props;

    const beerTilesJSX = beersArr.map((beer, index) => {
      const name = beer.name;
      const image = beer.image_url
      const tagline = beer.tagline
      const description = beer.description
      const food = beer.food_pairing

      return (
        <div className="flip-card beer-tile" key={name + index}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3 className="beer-tile__header">{name}</h3>
            <img className="beer-tiles__img" src={image} alt={name}></img>
            <h4 className="beer-tile__tagline">"{tagline}"</h4>
          </div>
          <div className="flip-card-back">
          <h3 className="beer-tile__header">{name}</h3>
          <div className="beer-tile__description-box">
          <h4 className="beer-tile__heading">Description</h4>
          <h5 className="beer-tile__description">{description}</h5>
          </div>
          </div>
        </div>
      </div>
      
      )
    })

        
     
    return (
      <>
      <div className="beer-tiles">{beerTilesJSX}</div>
      </>

    )
};

export default BeerCard;