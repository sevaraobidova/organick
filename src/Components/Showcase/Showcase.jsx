import React from 'react'
import './Showcase.scss'
import Tittle from '../Common/Tittle'
import Button from '../Common/Button'
import image from '../assets/img/showcase-background.png';


const Showcase = () => {
  return (
    <div className='showcase '>
      <div className='showcase-wraper container'>
        <div className="showcase-text ">
          {/* Tittle component */}
          <Tittle mini="Made with nature" main="Welcome to the world of nature and organic." />
          {/* BUtton component */}
          <Button color='#EFD372' textcolor='var(--primary-color)' border='16px' text='Explore Now'></Button>
        </div>
      </div>
    </div>
  )
}

export default Showcase
