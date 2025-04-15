
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-[#F2FCE2]">
      <div className="text-center max-w-2xl p-8">
        <h1 className="text-5xl font-bold mb-4 text-[#0EA5E9]">
          Solar Solutions for a Sustainable Future
        </h1>
        <p className="text-xl mb-8 text-gray-700">
          We provide cutting-edge solar engineering, procurement, and construction services to transform your energy landscape.
        </p>
        <button className="bg-[#0EA5E9] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
