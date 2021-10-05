import React from 'react'
import "./Acidic.scss"
function Acidic(props) {

  const {handleClick, selection, filterAcidic} = props
  return (
    <>
       <a href ="#about" onClick={handleClick} value={filterAcidic} selection={selection}>Acidic</a>
    </>
  )
}

export default Acidic
