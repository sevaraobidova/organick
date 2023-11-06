import React from 'react'
import './Tittle.css'

const Tittle = (props) => {
  return (
    <div>
      <div className="heading">
        <h2 className='mini-heading-text'>{props.mini}</h2>
        <h1 className='main-heading-text' style={{color: props.textcolor}}>{props.main}</h1>
      </div>
    </div>
  )
}

export default Tittle
