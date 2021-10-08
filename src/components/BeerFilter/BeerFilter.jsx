import React from 'react'
import "./BeerFilter.scss"
import HighABV from './HighABV/HighABV'
import ClassicRange from './ClassicRange/ClassicRange'
import Acidic from './Acidic/Acidic'
import SeeAllBeers from './SeeAllBeers/SeeAllBeers'
import { Link } from "react-router-dom";

function BeerFilter(props) {
  const {handleHighABVClick, handleAcidicClick, handleClassicRangeClick, handleAllBeersClick} = props
  return (
    <>
      <Link to="/"><SeeAllBeers handleAllBeersClick={handleAllBeersClick} /></Link>
      <Link to="/"><HighABV handleHighABVClick={handleHighABVClick} /></Link>
      <Link to="/"><ClassicRange handleClassicRangeClick={handleClassicRangeClick}/></Link>
      <Link to="/acidic"><Acidic handleAcidicClick={handleAcidicClick}/></Link>
    </>
  )
}

export default BeerFilter
