import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import Navigation Hook
import './ProductLineup.css';
import bottleImg from '../assets/hero_image.png';

const products = [
  {
    id: 1,
    name: "Turbo Energy",
    tag: "Citrus Rush",
    desc: "Instant caffeine release for peak performance.",
    color: "#eab308",
  },
  {
    id: 2,
    name: "Pure Hydration",
    tag: "Ocean Blue",
    desc: "Electrolytes and minerals for rapid recovery.",
    color: "#3b82f6",
  },
  {
    id: 3,
    name: "Cold Brew",
    tag: "Midnight Roast",
    desc: "Barista-quality coffee in a single snap.",
    color: "#8d6e63",
  }
];

const ProductLineup = () => {
  const navigate = useNavigate(); // ✅ Initialize Hook

  // Function to handle click
  const handleShop = (productName) => {
    navigate('/pre-order', { 
      state: { 
        product: productName,
        locked: true // ✅ This tells the form: "Don't ask again!"
      } 
    });
  };

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
            style={{ "--product-color": product.color }}
          >
            <div className="card-bg"></div>
            
            <div className="img-container">
              <img src={bottleImg} alt={product.name} />
            </div>

            <div className="card-info">
              <span className="tag" style={{ color: product.color }}>{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              
              <button 
                className="card-btn" 
                style={{ background: product.color }}
                onClick={() => handleShop(product.name)} // ✅ Connect the click
              >
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