
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    { name: 'Residential Solar', description: 'Efficient home solar solutions' },
    { name: 'Commercial Solar', description: 'Large-scale solar for businesses' },
    { name: 'Solar Storage', description: 'Advanced battery storage systems' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAF0] py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1E7F3C]">
          Our Solar Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-[#1E7F3C]">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
