import React from 'react'

function SeeAllBeers(props) {

  const {handleAllBeersClick} = props
  return (
    <>
       <p onClick={handleAllBeersClick}>All Beers</p>
    </>
  )
}

export default SeeAllBeers
