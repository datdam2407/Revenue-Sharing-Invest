import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Header from './cointainer/header/header';
import WhatRSI from './cointainer/aboutRSI/WhatRSI';
import Features from './cointainer/features/Features'

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <WhatRSI/>
    <Features />

    </div>
 
    </div>
);

export default App;
