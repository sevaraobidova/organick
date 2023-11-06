import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
      <button style={{background: props.color, color: props.textcolor, border: props.border}}> {props.text}</button>
    </div>
  )
}

export default Button
