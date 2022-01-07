import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './regulationCrowdfunding.css';
import { test1, test2, test3,test4,test5,test6 } from '../startup/import';

const RegulationCrowdfunding = () => {
  return (
    <div className="RSI_Regulation section__padding" id="regulation">
      <div className="RSI_Regulation-heading">
  <h3 > <a style={{color:"green"}} href="#"><i class="fa fa-check"></i>
  </a>All Regulation Crowdfunding deals are highly vetted by our <a href='#'>investment team.</a></h3>
  {/* <button>Most founded</button> */}
      </div>

      <div className="RSI_Regulation-container_groupB">

        <Title imgUrl={test1} logo={test2} date="Sep 26, 2021" text="First Tokenized Litigation Funding for one of largest US crop destructions" des="First Tokenized Litigation Funding for one of largest US crop destructions" />
        <Title imgUrl={test3}  text="Invert" />
        <Title imgUrl={test1}  text="Invert" />
        <Title imgUrl={test4}  text="Invert" />
        <Title imgUrl={test5}  text="Invert" />
        <Title imgUrl={test6}  text="Invert" />

      </div>
        <button>View more</button>

    </div>
  )
};

export default RegulationCrowdfunding;
