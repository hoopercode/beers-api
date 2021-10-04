import React from 'react';
import "./BeerFilter.scss"
import Acidic from '../Acidic/Acidic';




  const BeerFilter = (props) => {
    const {handleClick, selection, HighABV, ClassicRange, Acidic} = props

    return (
    
      <>

      {/* <HighABV handleClick={handleClick} selection={selection} HighABV={HighABV} />
      <ClassicRange handleClick={handleClick} selection={selection} ClassicRange={ClassicRange} />
      <Acidic handleClick={handleClick} selection={selection} Acidic={Acidic} /> */}
     </>

    )
};

export default BeerFilter;