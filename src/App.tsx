import React from 'react';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import Big5Quiz from './components/Big5Quiz';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProductShowcase />
      <Big5Quiz />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
