import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    }
  };

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
            {isOpen ? <X color="white" /> : <Menu color="white" />}
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (New Part) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-nav-list"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#technology" onClick={() => setIsOpen(false)}>Technology</a>
            <a href="#" onClick={() => setIsOpen(false)}>About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;