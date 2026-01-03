import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Droplet } from 'lucide-react'; // Changed icon to Droplet
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* 1. The Big Statement (Updated for CAPS) */}
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle">THE INNOVATION</span>
          <h2>THE BOTTLE IS JUST A VESSEL. <br /> <span className="highlight-text">THE CAP IS THE ENGINE.</span></h2>
          <p>
            Standard drinks mix the powder at the factory, months before you drink them. 
            <strong>The Yumora Cap</strong> changes the rules. It stores the active ingredients in a sealed, dry chamber 
            under the lid—dropping them into the water only when <em>you</em> decide.
          </p>
        </motion.div>

        {/* 2. The Bento Grid (Updated Logic) */}
        <div className="bento-grid">
          
          {/* Card 1: The Mechanism */}
          <motion.div 
            className="bento-card card-dark"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Droplet size={40} className="icon-accent" />
            <h3>Drop & Dissolve</h3>
            <p>One twist releases the powder instantly into the water. Zero clumps, zero waiting.</p>
          </motion.div>

          {/* Card 2: The Potency */}
          <motion.div 
            className="bento-card card-accent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>Freshness Level</h3>
            <div className="big-number">100%</div>
            <p>Activated at the moment of consumption.</p>
          </motion.div>

          {/* Card 3: The Advantage */}
          <motion.div 
            className="bento-card card-glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Zap size={40} className="icon-white" />
            <h3>Dry-Lock Tech</h3>
            <p>By keeping ingredients dry in the cap, we eliminate the need for liquid preservatives.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;