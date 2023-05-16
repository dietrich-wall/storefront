import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import SigninPage from './pages/signin';
import ShopPage from './pages/shop';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { ModalProvider, BaseModalBackground } from "styled-react-modal";
// import ModalButton from "./components/ModalElement";
// import styled from "styled-components";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Sidebar open={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
      <Footer />
    </>
      
  );
}

export default App;
