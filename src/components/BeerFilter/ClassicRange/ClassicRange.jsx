import React from 'react'
import "./ClassicRange.scss"
function ClassicRange(props) {

  const {handleClassicRangeClick, selection, filterClassic} = props
  return (
    <>
       <p onClick={handleClassicRangeClick} value={filterClassic} selection={selection}>Classic Range</p>
    </>
  )
}

export default ClassicRange
