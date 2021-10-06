import React from 'react'
import "./BeerFilter.scss"
import HighABV from './HighABV/HighABV'
import ClassicRange from './ClassicRange/ClassicRange'
import Acidic from './Acidic/Acidic'
import SeeAllBeers from './SeeAllBeers/SeeAllBeers'

function BeerFilter(props) {
  const {handleHighABVClick, handleAcidicClick, handleClassicRangeClick, handleAllBeersClick} = props
  return (
    <>
      <SeeAllBeers handleAllBeersClick={handleAllBeersClick} />
      <HighABV handleHighABVClick={handleHighABVClick} />
      <ClassicRange handleClassicRangeClick={handleClassicRangeClick}/>
      <Acidic handleAcidicClick={handleAcidicClick}/>
    </>
  )
}

export default BeerFilter
