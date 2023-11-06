import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logo.png";
import {
  FaFacebook,
} from "react-icons/fa";
import { BsInstagram } from 'react-icons/bs';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { IoLogoPinterest } from 'react-icons/io';




const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container footer">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="email social">
              <h4>Email</h4>
              <p className="ordinary-text">needhelp@organick.com</p>
            </div>
            <div className="phone social">
              <h4>Phone</h4>
              <p className="ordinary-text">123 (1254) 1452</p>
            </div>
            <div className="address social">
              <h4>Address</h4>
              <p className="ordinary-text">88 Road, Brooklyn Street, USA</p>
            </div>
          </div>
          <div className="footer-logo">
            <img src={logo} alt="" />
            <p className="ordinary-text">
              We are a popular and farming company aspiring to be a leader in
              the Organic food industry.
            </p>
            <div className="social-icons">
              <h3><FaFacebook /></h3>
              <h3><BsInstagram /></h3>
              <h3><AiFillTwitterSquare /></h3>
              <h3><IoLogoPinterest /></h3>
            </div>
          </div>
          <div className="utility">
              <h2>Utility Pages</h2>
              <ul className="footer-link">
                <li className="ordinary-text"><a href="">Style Guide</a></li>
                <li className="ordinary-text"><a href="">Protected</a></li>
                <li className="ordinary-text"><a href="">Page Not Found</a></li>
                <li className="ordinary-text"><a href="">Changelog</a></li>
                <li className="ordinary-text"><a href="">Licenses</a></li>
              </ul>
            </div>
        </div>
      </footer>
      <div className="security">
        <h3 className="ordinary-text">Copyright © Organick | Designed by
VictorFlow
- Powered by
Webflow</h3>
      </div>
    </div>
  );
};

export default Footer;
