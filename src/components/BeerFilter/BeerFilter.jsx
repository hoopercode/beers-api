import React from 'react'
import "./BeerFilter.scss"
import HighABV from './HighABV/HighABV'
import ClassicRange from './ClassicRange/ClassicRange'
import Acidic from './Acidic/Acidic'

function BeerFilter(props) {
  const {handleHighABVClick, handleAcidicClick, handleClassicRangeClick} = props
  return (
    <>
      <HighABV handleHighABVClick={handleHighABVClick} f/>
      <ClassicRange handleClassicRangeClick={handleClassicRangeClick}/>
      <Acidic handleAcidicClick={handleAcidicClick}/>
    </>
  )
}

export default BeerFilter
