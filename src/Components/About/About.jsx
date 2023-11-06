import React from 'react'
import './About.scss';
import icon1 from '../../src/assets/img/about1.png';
import icon2 from '../../src/assets/img/about2.png';
import Tittle from '../Common/Tittle';
import Button from '../Common/Button';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className="about-img">
          
        </div>
        <div className="about-txt">
          <Tittle mini='About Us' main='We believe in Organic Foods for Strong Health' />
          <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</p>
          <div className="flex-row">
            <img src={icon1} alt="" />
            <div>
              <h3>Organic Foods Only</h3>
              <p>
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <img src={icon2} alt="" />
            <div>
              <h3>Organic Foods Only</h3>
              <p>
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step.
              </p>
            </div>
          </div>
          <Button color='var(--primary-color)' textcolor='white' border='16px' text='Shop Now'></Button> 

        </div>
      </div>

    </div>
  )
}

export default About
