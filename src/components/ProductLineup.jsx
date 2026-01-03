import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ProductLineup.css';
import bottleImg from '../assets/hero_image.png';

const products = [
  {
    id: 1,
    name: "Turbo Energy",
    tag: "Citrus Rush",
    desc: "Instant caffeine release for peak performance.",
    color: "#eab308", // Yellow
  },
  {
    id: 2,
    name: "Pure Hydration",
    tag: "Ocean Blue",
    desc: "Electrolytes and minerals for rapid recovery.",
    color: "#3b82f6", // Blue
  },
  {
    id: 3,
    name: "Cold Brew",
    tag: "Midnight Roast",
    desc: "Barista-quality coffee in a single snap.",
    color: "#8d6e63", // Coffee Brown
  }
];

const ProductLineup = () => {
  return (
    <section className="lineup" id="products">
      <motion.h2 
        className="lineup-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        CHOOSE YOUR FUEL
      </motion.h2>

      <div className="lineup-grid">
        {products.map((product, i) => (
          <motion.div 
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -15 }}
            style={{ "--product-color": product.color }} /* Pass color to CSS */
          >
            {/* Colored Ambient Background */}
            <div className="card-bg"></div>
            
            <div className="img-container">
              <img src={bottleImg} alt={product.name} />
            </div>

            <div className="card-info">
              <span className="tag" style={{ color: product.color }}>{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              
              <button className="card-btn" style={{ background: product.color }}>
                Shop <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductLineup;