import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added hook
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook to change URL programmatically

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }
  };

  // ✅ UPDATED FUNCTION: Updates URL to /Home without reloading
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    // 1. Ensure we are on the /Home path
    navigate('/Home');

    // 2. Scroll to the section
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 10);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo"
          onClick={() => {
            navigate('/Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
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
              <a 
                href={`/Home#${item.toLowerCase()}`} // Explicit path
                onClick={(e) => handleScroll(e, item.toLowerCase())}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.button whileHover={{ scale: 1.1 }} className="cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </motion.button>
          
          <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" /> : <Menu color="white" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-nav-list"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a href="/Home#products" onClick={(e) => handleScroll(e, 'products')}>Products</a>
            <a href="/Home#technology" onClick={(e) => handleScroll(e, 'technology')}>Technology</a>
            <a href="/Home#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;