import React from 'react';
import "./HighABV.scss"



  const HighABV = (props) => {
    const {handleClick, selection, HighABV} = props
    return (
      <>
      <a href ="#about" onClick={handleClick} value={HighABV} selection={selection}>High ABV &#40;&#60;6.0%&#41;</a>
      </>
    )
};

export default HighABV;