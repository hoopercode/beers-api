import React from 'react'
import "./HighABV.scss"

function HighABV(props) {

  const {handleHighABVClick, selection, filterHighABV} = props

  return (
    <>
      <p className="nav__HighABV" onClick={handleHighABVClick} value={filterHighABV} selection={selection}>High ABV &#40;&#60;6.0%&#41;</p>
    </>
  )
}

export default HighABV
