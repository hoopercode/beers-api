import React from 'react'
import "./Acidic.scss"


function Acidic(props) {

  const {handleAcidicClick, selection, filterAcidic} = props
  return (
    <>
       <p className="nav__Acidic"onClick={handleAcidicClick} value={filterAcidic} selection={selection}>Acidic</p>
    </>
  )
}

export default Acidic
