import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './regulationCrowdfunding.css';
import { funded1, funded2, funded3, funded4, funded5, funded6, logo1, logo2, logo3, logo4, logo6, logo7 } from '../startup/import';



  
const RegulationCrowdfunding = () => {

  return (
    <div className="RSI_Regulation section__padding" id="regulation">
      <div className="RSI_Regulation-heading">
  <h3 > <a style={{color:"green"}} href="#"><i class="fa fa-check"></i>
  </a>All Regulation Crowdfunding deals are highly vetted by our <a href='#'>investment team.</a></h3>
  {/* <button>Most founded</button> */}
      </div>


 

      <div className="RSI_Regulation-container_groupB" >

        <Title imgUrl={funded3} logo={logo7} date="Sep 26, 2021" text="First Tokenized" des="First Tokenized Litigation Funding for one of largest US crop destructions" />
        <Title imgUrl={funded5} logo={logo1} text="Litigation Funding" des="A diversified portfolio of digital real estate NFTs across various metaverses." />
        <Title imgUrl={funded1} logo={logo2} text="AlPhineX" des="Invest in indoor snowsports resorts throughout North America!" />
        <Title imgUrl={funded2} logo={logo3} text="Insee.com" des="A social network for newsletters, meeting new colleagues, and virtual events" />
        <Title imgUrl={funded4} logo={logo4} text="KingsCronw" des="The financial data platform for the online private market" />
        <Title imgUrl={funded6} logo={logo6} text="Artisanal Funding" des="Artisanal, luxury candy and sweet experiences for grown ups" />
        

      </div>
        <button>View more</button>

    </div>
  )
};

export default RegulationCrowdfunding;
