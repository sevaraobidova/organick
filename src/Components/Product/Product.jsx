import React from "react";
import Tittle from "../Common/Tittle";
import "./Product.css";
import img from "../../assets/img/product (1).png";
import img1 from "../../assets/img/product (2).png";
import img2 from "../../assets/img/product (3).png";
import img3 from "../../assets/img/product (4).png";
import img4 from "../../assets/img/product (5).png";
import img5 from "../../assets/img/product (6).png";
import {AiFillStar } from "react-icons/ai";

const Product = () => {
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
    {
      img: img3,
      category: "Vegetable",
      name: "Vegan Red Tomato",
      oldPrice: "$ 14.00 USD",
      price: "$ 9.37 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
    {
      img: img4,
      category: "Fruits",
      name: "Organic Almonds",
      oldPrice: "$ 21.00 USD",
      price: "$ 18.00 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
    {
      img: img5,
      category: "Millets",
      name: "Brown Hazelnut",
      oldPrice: "$ 43.00 USD",
      price: "$ 34.00 USD",
      star: [<AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>, <AiFillStar/>]
    },
  ];
  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="product-title">
            <Tittle mini="Organic" main="Our Products" />
          </div>
          <div id="product-cards" className="product-cards">
            {cards.map((item => (
              <div className="product-card">
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
  );
};

export default Product;
