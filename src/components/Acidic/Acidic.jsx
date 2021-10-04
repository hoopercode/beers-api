import React from 'react';
import "./Acidic.scss"



  const Acidic = (props) => {
    const {selection, handleClick, Acidic} = props
    return (
    
    <>  
    <a href="#clients" onClick={handleClick} selection={selection} value={Acidic}>Acidic &#40;ph&#60;4&#41;</a>
    </>

    )
};

export default Acidic;