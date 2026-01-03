import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import ProductLineup from './components/ProductLineup';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import About from './components/About'; // Import the new component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TechSpecs />
      <Marquee />
      <ProductLineup />
      <About /> {/* Add the About Section here */}
      <Footer />
    </div>
  )
}

export default App;