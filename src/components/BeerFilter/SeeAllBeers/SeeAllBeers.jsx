import React from 'react'
import "./SeeAllBeers.scss"

function SeeAllBeers(props) {

  const {handleAllBeersClick} = props
  return (
    <>
       <p className="nav__SeeAllBeers"onClick={handleAllBeersClick}>All Beers</p>
       <span className="toolTipText">See the entire range</span>
    </>
  )
}

export default SeeAllBeers
