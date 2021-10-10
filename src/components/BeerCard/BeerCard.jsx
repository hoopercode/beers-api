import { Link } from "react-router-dom";
import React from 'react';
import "./BeerCard.scss"

const BeerCard = (props) => {

    const { beersArr } = props;

    const beerTilesJSX = beersArr.map((beer, index) => {
      const {name, image_url, tagline, description, food_pairing, id } = beer
      const noInfo = "Sorry, no description for this beer"
      const descriptionShorten = (description) => {

        if (description.length > 200){
          const fullStop = description.indexOf(".", 200)
          const splitDescription = description.split('')
          const newDescription = splitDescription.slice(0,(fullStop + 1));
          const spacedDescription = newDescription.join("");
        
          
          return spacedDescription
        }
      }
      
      return (
        <div className="flip-card beer-tile" key={name + index}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3 className="beer-tile__header">{name}</h3>
            <img className="beer-tiles__img" src={image_url} alt={name}></img>
            <h4 className="beer-tile__tagline">"{tagline}"</h4>
          </div>
          <div className="flip-card-back">
          <h3 className="beer-tile__header">{name}</h3>
          <div className="beer-tile__description-box">
          <h4 className="beer-tile__heading">Description</h4>
          <h5 className="beer-tile__description">{(description) ? descriptionShorten(description) : noInfo} </h5>
          <h4 className="beer-tile__heading">Drink this beer with...</h4>
          <h5 className="beer-tile__description">{food_pairing}</h5>
          <Link to={`/beer/${id}`}key={name + (index + 1)}> <button>Click to know more</button></Link>
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

