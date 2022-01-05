import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './cointainer/header/header';
import WhatRSI from './cointainer/aboutRSI/WhatRSI';
import Features from './cointainer/features/Features'
import Invertco from './cointainer/startup/Invertco';
import CTA from './component/callaction/CTA';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />

    <Features />
    <Invertco />

    <CTA />
    <WhatRSI />

    </div>
   
  </div>
);

export default App;
