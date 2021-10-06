import React from 'react'
import "./Acidic.scss"
function Acidic(props) {

  const {handleAcidicClick, selection, filterAcidic} = props
  return (
    <>
       <a href ="" onClick={handleAcidicClick} value={filterAcidic} selection={selection}>Acidic</a>
    </>
  )
}

export default Acidic
