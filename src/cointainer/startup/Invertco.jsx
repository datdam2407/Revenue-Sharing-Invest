import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './invertco.css';
import { logo1,logo2,logo3, funded6, funded5, funded1 } from './import';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
const Invertco = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },
    []);
  return (
    <div className="RSI_invertco section__padding" id="blog">
      <div className="RSI_invertco-heading">
        <h1 >Invert Now<br /> </h1>
  <h3 > <a style={{color:"green"}} href="#"><i class="fa fa-line-chart"></i></a>Most traction in 3 days</h3>
      </div>
      <div className="RSI_invertco-container_groupB" data-aos="zoom-in" >
        {/* <div className='RSI__card'>
            <div className='RSI__card-content'>
              <h2 className='RSI_card-title'> Invert</h2>
              <p className='RSI_card-body'>
                SOmthing
              </p>
              <a href='#' className='RSI_button_more'>See more</a>
            </div>
          </div> */}
        <Link  to={Title.text}><Title imgUrl={funded1} logo={logo2} date="Sep 26, 2021" text="First Tokenized " des="First Tokenized Litigation Funding for one of largest US crop destructions" /> </Link>
        <Title imgUrl={funded6} logo={logo1} date="Sep 26, 2021" text="Terraformation" des="
Hyperscaling forest restoration to reverse climate change" />
        <Title imgUrl={funded5} logo={logo2} date="Sep 26, 2021" text="Invert destructions" des="
A social network for newsletters, meeting new colleagues, and virtual events" />
        {/* <Title imgUrl={test4} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" /> */}

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
