// import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import InfoSection from '../components/InfoSection';
import { aboutObj, discoverObj, signupObj, newlistingObj } from '../components/InfoSection/Data';
// import Navbar from '../components/Navbar';
import Services from '../components/Services';
// import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';

const Home = () => {

  return (
    <>
      <CoverSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <InfoSection {...newlistingObj} />
      <InfoSection {...signupObj} />
      <Services />

    </>
  );
};

export default Home;
