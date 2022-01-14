import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import '../../../src/cointainer/startup/invertco.css';
import { funded1, funded2, funded3, funded4, funded6, logo1, logo2, logo3, logo4, logo6} from '../../cointainer/startup/import';
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
      <Title imgUrl={funded1} logo={logo2} text="AlPhineX" des="Invest in indoor snowsports resorts throughout North America!" />
        <Title imgUrl={funded2} logo={logo3} text="Insee.com" des="A social network for newsletters, meeting new colleagues, and virtual events" />
        <Title imgUrl={funded4} logo={logo4} text="KingsCronw" des="The financial data platform for the online private market" />
        <Title imgUrl={funded6} logo={logo6} text="Artisanal Funding" des="Artisanal, luxury candy and sweet experiences for grown ups" />
        <Title imgUrl={funded3} logo={logo1} text="Litigation Funding" des="A diversified portfolio of digital real estate NFTs across various metaverses." />

      </div>
            <p style={{textAlign:"center"}}>Add Lazing load</p>
    </div>
      <Footer/>
      </>
  )
};

export default StartupPage;
