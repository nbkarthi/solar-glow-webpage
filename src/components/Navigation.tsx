
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[#1E7F3C]">GreenRise Energy Solutions</div>
        <div className="space-x-4">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-[#1E7F3C] transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('products')} 
            className="hover:text-[#1E7F3C] transition-colors"
          >
            Products
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-[#1E7F3C] transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
