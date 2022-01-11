import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import '../../../src/cointainer/startup/invertco.css';
import { test1, test2, test3,test4,test5,test6 } from '../../cointainer/startup/import';
import Footer from '../../component/footer/Footer';


const StartupPage = () => {

  return (
    <>
<div className="RSI_invertco section__padding" id="blog">
      <div className="RSI_invertco-heading">
        <h1 >Invert Now<br /> </h1>
  <h3 > <a style={{color:"green"}} href="#"><i class="fa fa-line-chart"></i>
  </a>Browse current investment opportunities on Republic. All companies are vetted & pass due diligence.</h3>
      </div>

      <div className="RSI_invertco-container_groupB">
        <Title imgUrl={test1} logo={test2} date="Sep 26, 2021" text="First Tokenized Litigation Funding for one of largest US crop destructions" des="First Tokenized Litigation Funding for one of largest US crop destructions" />
        <Title imgUrl={test3} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test1} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test4} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test5} date="Sep 26, 2021" text="Invert" />
        <Title imgUrl={test6} date="Sep 26, 2021" text="Invert" />

      </div>
            <p style={{textAlign:"center"}}>Add Lazing load</p>
    </div>
      <Footer/>
      </>
  )
};

export default StartupPage;
