import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './cointainer/header/header';
import WhatRSI from './cointainer/aboutRSI/WhatRSI';
import Features from './cointainer/features/Features'
import Invertco from './cointainer/startup/Invertco';
import CTA from './component/callaction/CTA';
import Footer from './component/footer/Footer';

const App = () => (
  <div className="App">
      <Navbar />

    <div className="gradient__bg">
      <Header />
    <Features />
    <Invertco />
    <CTA />
    <WhatRSI />
    <Invertco />
    </div>
    <Footer/>
  </div>
);

export default App;
