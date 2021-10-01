import React from 'react';

import "./BeerCard.scss"

const BeerCard = (props) => {

    const { beersArr } = props;

    const beerTilesJSX = beersArr.map((beer, index) => {
      const name = beer.name;
      const image = beer.image_url
      const tagline = beer.tagline
      const description = beer.description

      return (
      <div key={name + index} className="beer-tile">
        <h3>{name}</h3>
      <img className="beer-tiles__img" src={image} alt={name}></img>
      <h4 className="beer-tile__tagline">"{tagline}"</h4>
      <h5 className="beer-tile__description">{description}</h5>
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