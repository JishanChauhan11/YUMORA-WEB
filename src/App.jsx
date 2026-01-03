import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import ProductLineup from './components/ProductLineup';
import Marquee from './components/Marquee'; // Import
import Footer from './components/Footer';   // Import

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TechSpecs />
      <Marquee /> {/* The Moving Text Strip */}
      <ProductLineup />
      <Footer /> {/* The End */}
    </div>
  )
}

export default App;