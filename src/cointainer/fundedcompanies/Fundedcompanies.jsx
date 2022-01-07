import { React, useEffect } from 'react';
import Title from '../../component/title/Title';
import './fundedcompanies.css';
import { founded1, founded2, founded3,founded4} from '../startup/import';

const Fundedcompanies = () => {
  return (
    <div className="RSI_Funded section__padding" id="regulation">
      <div className="RSI_Funded-heading">
    <h1> Funded Companies</h1>
  <h3 >90% of Republic campaigns have been successfully funded</h3>

      </div>

      <div className="RSI_Funded-container_groupB">

        <Title imgUrl={founded1} date="Sep 26, 2021" text="
Fig Portfolio Shares" />
        <Title imgUrl={founded2}  text="Robot Cache" />
        <Title imgUrl={founded3}  text="Digital Eslipse" />
        <Title imgUrl={founded4}  text="Marouder" />
        <Title imgUrl={founded1}  text="Moonray" />
        <Title imgUrl={founded4}  text="Invert" />

      </div>
        <button>View All Funded</button>

    </div>
  )
};

export default Fundedcompanies;
