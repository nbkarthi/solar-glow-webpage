
import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/sections/Home';
import Products from '../components/sections/Products';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      <main>
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>
        <section id="products" className="scroll-mt-16">
          <Products />
        </section>
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
      <footer className="py-6 text-center text-sm text-gray-600 bg-[#F7FAF0]">
        <p>© {new Date().getFullYear()} GreenRise Energy Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
