import React from 'react'
import './Discount.scss';
import Tittle from '../Common/Tittle';
import background from '../assets/img/discount-background (1).png';
import background2 from '../assets/img/discount-background (2).png';
import { color } from 'framer-motion';

const Discount = () => {
  return (
    <div className='discount container'>
      <div className='discount-wraper '>
        <div className='discount-card1'>
          
          <Tittle  mini='Natural!!' main='Get Garden Fresh Fruits'/>
        </div>
        <div className='discount-card2' style={{ backgroundImage: `url(${background2})` }}>
          <Tittle  mini='Offer!!' main='Get 10% off on Vegetables' />
        </div>
      </div>
    </div>
  )
}

export default Discount
