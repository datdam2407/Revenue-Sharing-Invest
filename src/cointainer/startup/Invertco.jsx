import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './invertco.css';
import { test1, test2 } from './import';
import Aos from 'aos';
import "aos/dist/aos.css"
{/* <><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

  <script src="bower_components/aos/dist/aos.js"></script> 
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
 
</> */}


const Invertco = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },
    []);
  return (
    <div className="RSI_invertco section__padding" id="blog">
      <div className="RSI_invertco-heading">
        <h1 className="gradient__text">Invert Now<br /> </h1>
        <h3 style={{ color: "green" }}>Most traction in 3 days</h3>
      </div>


        <div className="RSI_invertco-container_groupB">
          {/* <div className='RSI__card'>
            <div className='RSI__card-content'>
              <h2 className='RSI_card-title'> Invert</h2>
              <p className='RSI_card-body'>
                SOmthing
              </p>
              <a href='#' className='RSI_button_more'>See more</a>
            </div>
          </div> */}


            <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
            <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
            <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />

        </div>


      {/* <div className='RSI__card'>
        <div className='RSI__card-content'>
          <h2 className='RSI_card-title'> Invert</h2>
          <p className='RSI_card-body'>
            SOmthing
          </p>
          <a href='#' className='RSI_button_more'>See more</a>
        </div>
      </div> */}

    </div>
  )
};

export default Invertco;
