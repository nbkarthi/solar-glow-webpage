
import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/sections/Home';
import Products from '../components/sections/Products';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2] text-gray-800">
      <Navigation />
      <div id="home">
        <Home />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
