
import React from 'react';

const Products = () => {
  const products = [
    { name: 'Residential Solar', description: 'Efficient home solar solutions' },
    { name: 'Commercial Solar', description: 'Large-scale solar for businesses' },
    { name: 'Solar Storage', description: 'Advanced battery storage systems' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D3E4FD] py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0EA5E9]">
          Our Solar Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0EA5E9]">
                {product.name}
              </h3>
              <p className="text-gray-700">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
