import React from 'react';
import './ProductShowcase.css';

const ProductShowcase: React.FC = () => {
  return (
    <div className="product-showcase">
      <div className="product-content">
        <h2>What is the Planet Lamp?</h2>
        <p>
          The Planet Lamp is a unique, 3D-printed lamp that is customized to your personality.
          Based on the Big 5 personality traits, we generate a unique planet design that is as individual as you are.
        </p>
      </div>
      <div className="product-image">
        <img src="https://via.placeholder.com/600x400" alt="Planet Lamp" style={{ borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export default ProductShowcase;
