// import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import InfoSection from '../components/InfoSection';
import { aboutObj, discoverObj, signupObj } from '../components/InfoSection/Data';
// import Navbar from '../components/Navbar';
import Services from '../components/Services';
// import Sidebar from '../components/Sidebar';

const Home = () => {

  return (
    <>
      <CoverSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      <InfoSection {...signupObj} />
      <Services />
    </>
  );
};

export default Home;
