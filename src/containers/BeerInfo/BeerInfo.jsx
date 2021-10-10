import React from 'react'
import { useParams } from "react-router";

function BeerInfo(props) {
  const { beersArr } = props;
  const { beerId } = useParams();
  const singleBeer = beersArr.find(beer => beer.id === beerId);
  return (
    <div>

    </div>
  )
}

export default BeerInfo
