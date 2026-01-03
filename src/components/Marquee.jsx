import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035], // Moves left. Adjust number based on text length
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Speed (lower = faster)
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <motion.div
          className="marquee-content"
          variants={marqueeVariants}
          animate="animate"
        >
          {/* We repeat the text to ensure a seamless loop */}
          <span>FRESHNESS REINVENTED • PRESS & SHAKE • YUMORA • </span>
          <span>FRESHNESS REINVENTED • PRESS & SHAKE • YUMORA • </span>
          <span>FRESHNESS REINVENTED • PRESS & SHAKE • YUMORA • </span>
          <span>FRESHNESS REINVENTED • PRESS & SHAKE • YUMORA • </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;