import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
        >
          YUMORA
        </motion.div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {['Products', 'Technology', 'About'].map((item, i) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="cart-btn"
          >
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </motion.button>
          
          <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;