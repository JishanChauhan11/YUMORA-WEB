import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import './Hero.css';
import heroImage from '../assets/hero_image.png';

const Hero = () => {
  const navigate = useNavigate(); // ✅ Initialize hook

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="hero-badge"
        >
          NEW ARRIVAL
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          FRESHNESS <br /> 
          <span className="outline-text">REINVENTED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Press. Shake. Unleash the power of active ingredients.
        </motion.p>
        
        <motion.button 
          onClick={() => navigate('/pre-order')} // ✅ Added Click Handler
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--accent-glow)" }}
          whileTap={{ scale: 0.95 }}
          className="cta-btn"
        >
          Pre-Order Now
        </motion.button>
      </div>

      <div className="hero-visual">
        {/* 1. The Rotating Ring with Border Effect */}
        <motion.div 
          className="circle-bg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>

        {/* 2. The Ambient Red Mist */}
        <div className="hero-ambient-glow"></div>
        
        {/* 3. The Bottle */}
        <motion.img 
          src={heroImage} 
          alt="Yumora Bottle" 
          className="hero-image-real"
          initial={{ opacity: 0, y: 30, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -15, rotate: -5, scale: 1.05 }}
        />
      </div>
    </section>
  );
};

export default Hero;