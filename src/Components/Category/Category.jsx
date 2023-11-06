import React from "react";
import "./Category.css";
import fruit from "../../assets/img/category (1).png";
import fruit2 from "../../assets/img/category (2).png";
import fruit3 from "../../assets/img/category (3).png";

const Category = () => {
  return (
    <div className="section8">
      <div className="category">
        <img src={fruit3} className="fruit-img"/>
        <img src={fruit2} className="fruit-img" />
        <img src={fruit} className="fruit-img" />
      </div>
    </div>
  );
};

export default Category;
