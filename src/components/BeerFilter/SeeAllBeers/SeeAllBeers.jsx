import React from 'react'
import "./SeeAllBeers.scss"

function SeeAllBeers(props) {

  const {handleAllBeersClick} = props
  return (
    <>
       <p className="nav__SeeAllBeers"onClick={handleAllBeersClick}>All Beers</p>
    </>
  )
}

export default SeeAllBeers
