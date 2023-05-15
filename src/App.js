import './App.css';
import React, { useState } from 'react';
import Landing from './pages/landing';
import SigninPage from './pages/signin';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { ModalProvider, BaseModalBackground } from "styled-react-modal";
// import ModalButton from "./components/ModalElement";
// import styled from "styled-components";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <Sidebar open={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
