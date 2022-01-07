import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './cointainer/header/header';
import WhatRSI from './cointainer/aboutRSI/WhatRSI';
import Features from './cointainer/features/Features'
import Invertco from './cointainer/startup/Invertco';
import CTA from './component/callaction/CTA';
import Footer from './component/footer/Footer';
import Revenue from './component/whatrsi/Revenue';
import Collabration from './component/collab/Collabration';

const App = () => (
  <div className="App">
      <Navbar />

    <div className="gradient__bg">
      <Header />
    <Features />
    <Invertco />
    <CTA />
    {/* <WhatRSI /> */}
    <Revenue/>
    <Invertco />
    <Collabration/>

    </div>
    <Footer/>
  </div>
);

export default App;
