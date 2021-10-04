import React from 'react';
import "./ClassicRange.scss"



  const ClassicRange = (props) => {
    const {selection, handleClick, ClassicRange} = props
    return (
    
      <>
      <a href="#services"onClick={handleClick} value={ClassicRange} selection={selection}>Classic Range</a>
      </>
    )
};

export default ClassicRange;