import React from 'react';

import "./BeerCard.scss"

const BeerCard = (props) => {

    const { imgSrc, name, description, tagline} = props;

    return (
      <div className="beer-tile">
        <div className="beer-tile__main">
          <img src={imgSrc} className="beer-tile__img" alt={name} />
          <h3>{name}</h3>
          <h4 className="beer-tile__tagline">{tagline}</h4>
        </div>
        <div className="beer-tile__info">
          <h4 className="beer-tile__descriptionHeader">Description</h4>
          <h5 className="beer-tile__description">{description}</h5>
        </div>
    </div>
    )
};

export default BeerCard;