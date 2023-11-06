import React from 'react'
import Tittle from '../Common/Tittle'
import Button from '../Common/Button'
import './OfferProducts.css'
import img from "../../assets/img/product (1).png";
import img1 from "../../assets/img/product (2).png";
import img2 from "../../assets/img/product (3).png";
import {AiFillStar } from "react-icons/ai";
const OfferProducts = () => {

  const cards = [
    {
      img: img,
      category: "Vegetable",
      name: "Calabrese Broccoli",
      oldPrice: "$ 25.00 USD",
      price: "$ 21.00 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
    {
      img: img1,
      category: "Vegetable",
      name: "Fresh Corn",
      oldPrice: "$ 21.23 USD",
      price: "$ 18.00 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
    {
      img: img2,
      category: "Millets",
      name: "Dried Pistachio",
      oldPrice: "$ 61.00 USD",
      price: "$ 48.00 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
  ]

  return (
    <div>
      <section className='offered-products'>
        <div className="container">
        <div className="offer-title">
          <Tittle mini="Offer Products"
          main="We Offer Organic for You"
          textcolor="white"/>
          <Button text="View All products"
          color="rgba(239, 211, 114, 1)"
          textcolor="var(--primary-color)" />
        </div>
        <div className="offer-product-cards">
            {cards.map((item => (
              <div className="offer-product-card">
                <div className="category">
                  <h3>{item.category}</h3>
                </div>
                <div className="product-card-img">
                <img src={item.img} alt="" />
                </div>
                <div className="product-card-text">
                  <h2>{item.name}</h2>

                  <div className="price">
                    <p ><del className="ordinary-text">{item.oldPrice}</del> <span className="price-text">{item.price}</span> <span className="stars">{item.star}</span></p>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default OfferProducts
