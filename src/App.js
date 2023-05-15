import './App.css';
import React, { useState } from 'react';
import Landing from './pages/landing';
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
        <Route path="/" element={<Landing />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
