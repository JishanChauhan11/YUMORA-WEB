import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import ProductLineup from './components/ProductLineup';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import About from './components/About';
import PreOrder from './components/PreOrder';
import AdminPanel from './components/AdminPanel'; // ✅ Import this

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechSpecs />
      <Marquee />
      <ProductLineup />
      <About />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/pre-order" element={<PreOrder />} />
          
          {/* ✅ New Admin Route */}
          <Route path="/admin" element={<AdminPanel />} />
          
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;