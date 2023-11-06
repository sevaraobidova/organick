import React from "react";
import "./Subscribe.css";
import Limon from "/src/assets/img/subscribe.png";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-box">
      <div className="subscribe-text">
      <h3>
          Subscribe our
          <br />
          Newsletter
        </h3>
<input type="text" placeholder="Enter your email address"/>

      </div>
      </div>
    </div>
  );
};

export default Subscribe;
