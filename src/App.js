import './App.css';
import React, { useState } from 'react';
import Home from './pages/index';
import SigninPage from './pages/signin';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SigninPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
