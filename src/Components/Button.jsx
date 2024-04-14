import React from 'react'
// A Button Componet
const Button = ({text, onClick}) => {
  return (
    <button
      className="btn"
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button