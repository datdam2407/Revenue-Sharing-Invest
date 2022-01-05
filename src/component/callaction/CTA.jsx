import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="RSI__cta">
    <div className="RSI__cta-content">
      <h3 style={{ color: "black" }}> Don’t miss out. Get new startups in your inbox</h3>
       <div className="RSI__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>


  </div>
);

export default CTA;
