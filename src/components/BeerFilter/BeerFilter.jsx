import React from 'react'
import "./BeerFilter.scss"
import HighABV from './HighABV/HighABV'
import ClassicRange from './ClassicRange/ClassicRange'
import Acidic from './Acidic/Acidic'

function BeerFilter(props) {
  const {handleClick, filterAcidic, filterClassic, filterHighABV} = props
  return (
    <>
      <HighABV handleClick={handleClick} filterHighABV={filterHighABV}/>
      <ClassicRange handleClick={handleClick} filterClassic={filterClassic}/>
      <Acidic handleClick={handleClick} filterAcidic={filterAcidic}/>
    </>
  )
}

export default BeerFilter
