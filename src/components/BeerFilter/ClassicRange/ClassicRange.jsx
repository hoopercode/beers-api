import React from 'react'
import "./ClassicRange.scss"
function ClassicRange(props) {

  const {handleClick, selection, filterClassic} = props
  return (
    <>
       <a href ="#about" onClick={handleClick} value={filterClassic} selection={selection}>Classic Range</a>
    </>
  )
}

export default ClassicRange
