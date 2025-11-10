import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Your Planet, Your Light</h1>
        <p>Discover a lamp that's as unique as you are. Crafted based on your personality.</p>
        <a href="#subscribe-section" className="cta-button">Create Your Planet</a>
      </div>
    </div>
  );
};

export default HeroSection;
