import React from "react";
import "./Hero.css";
import hand_icon from "../Assests/hand_icon.png";
import arrow_icon from "../Assests/arrow.png";
import hero_image from "../Assests/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW SALE! Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} />
      </div>
    </div>
  );
}

export default Hero;
