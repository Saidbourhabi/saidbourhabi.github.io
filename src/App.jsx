import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Contact from './pages/contact/contact';
import Shop from './pages/shop/shop';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;