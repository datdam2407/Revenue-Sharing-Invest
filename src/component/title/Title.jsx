import React from 'react';
import './title.css';

const Title = ({ imgUrl, date, text }) => (
  <div className="RSI_invertco-container_title">
    <div className="RSI_invertco-container_title-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="RSI_invertco-container_title-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full title</p>
    </div>
  </div>
);

export default Title;
