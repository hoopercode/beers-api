import React from 'react'
import "./Acidic.scss"
function Acidic(props) {

  const {handleAcidicClick, selection, filterAcidic} = props
  return (
    <>
       <p onClick={handleAcidicClick} value={filterAcidic} selection={selection}>Acidic</p>
    </>
  )
}

export default Acidic
