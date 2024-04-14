import React from 'react'
//a componet to return to the prevoius page
const BackButton = ({onClick}) => {
  return (
    <button
      className="backButton"
      onClick={onClick}
    >
    Return
    </button>
  )
}

export default BackButton