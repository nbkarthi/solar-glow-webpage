
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="text-center max-w-2xl p-8">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/c95cc946-c391-49df-aafb-fffb3d76920b.png" 
            alt="GreenRise Energy Solutions Logo" 
            className="w-64 h-auto"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-[#1E7F3C]">
          Solar Solutions for a Sustainable Future
        </h1>
        <p className="text-xl mb-8 text-gray-700">
          We provide cutting-edge solar engineering, procurement, and construction services to transform your energy landscape.
        </p>
        <button className="bg-[#0078C2] text-white px-6 py-3 rounded-full hover:bg-[#005D99] transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
