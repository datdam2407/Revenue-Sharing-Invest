import React from 'react';
import Title from '../../component/title/Title';
import './invertco.css';
import {test1,test2} from './import';

const Invertco = () => (
  <div className="RSI_invertco section__padding" id="blog">
    <div className="RSI_invertco-heading">
      <h1 className="gradient__text">Invert Now<br /> </h1>
      <h3 style={{color:"green"}}>Most traction in 3 days</h3>
    </div>
    <div className="RSI_invertco-container">
      <div className="RSI_invertco-container_groupB">
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
      
      </div>
    </div>
  </div>
);

export default Invertco;
