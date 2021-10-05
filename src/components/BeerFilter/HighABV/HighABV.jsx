import React from 'react'
import "./HighABV.scss"

function HighABV(props) {

  const {handleClick, selection, filterHighABV} = props

  return (
    <>
      <a href ="#about" onClick={handleClick} value={filterHighABV} selection={selection}>High ABV &#40;&#60;6.0%&#41;</a>
    </>
  )
}

export default HighABV
