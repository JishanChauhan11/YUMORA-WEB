import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplet, ShieldCheck } from 'lucide-react'; // Icons
import './TechSpecs.css';

const TechSpecs = () => {
  const specs = [
    { 
      icon: <ShieldCheck size={40} />, 
      title: "Nitrogen Seal", 
      desc: "Keeps powder 100% fresh until the moment of consumption." 
    },
    { 
      icon: <Zap size={40} />, 
      title: "Instant Activation", 
      desc: "Press the cap to release active ingredients instantly." 
    },
    { 
      icon: <Droplet size={40} />, 
      title: "Zero Preservatives", 
      desc: "Since ingredients are kept dry, no artificial preservatives are needed." 
    }
  ];

  return (
    <section className="tech-specs" id="technology">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        THE TECHNOLOGY
      </motion.h2>

      <div className="specs-grid">
        {specs.map((item, index) => (
          <motion.div 
            className="spec-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, backgroundColor: "#151515" }}
          >
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechSpecs;