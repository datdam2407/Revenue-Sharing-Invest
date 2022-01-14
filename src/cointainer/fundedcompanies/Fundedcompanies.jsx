import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './fundedcompanies.css';
import { funded3, funded4, funded6,funded5,logo1,logo2,logo3,logo5,logo6,logo7,funded2,funded1} from '../startup/import';


const Fundedcompanies = () => {


  return (
    <div className="RSI_Funded section__padding" id="regulation">
      <div className="RSI_Funded-heading">
    <h1> Funded Companies</h1>
  <h3 >90% of Republic campaigns have been successfully funded</h3>

      </div>

      <div className="RSI_Funded-container_groupB">

        <Title imgUrl={funded3} logo={logo1} date="Sep 26, 2021" text="Robo Cache" des="
Game store on the blockchain" />
        <Title imgUrl={funded4} logo={logo2}  text="Care Network" des="
Decentralized Data and Finance Cloud for Enterprises" />
        <Title imgUrl={funded6} logo={logo3} text="Digital Eslipse" des="
GARI token offering—enabling crypto-powered creator economy on the Chingari App" />
        <Title imgUrl={funded2} logo={logo7}  text="Thimble" des="Live STEM classes + robotics kits to bring hands-on coding to every school" />
        <Title imgUrl={funded1} logo={logo5} text="Moonray" des="Canned cocktails inspiring a new social scene—one sip at a time" />
        <Title imgUrl={funded5} logo={logo6} text="Invert" des="
A new video game system that's redefining entertainment with family and friends"/>

      </div>
        <button className='buttonTest'>View All Funded</button>

    </div>
  )
};

export default Fundedcompanies;
