import React from 'react';
import { Instagram } from 'lucide-react'; // Removed Twitter & Facebook
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>YUMORA</h2>
          <p>The future of freshness is here.</p>
        </div>
        
        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <ul>
              <li>Coffee</li>
              <li>Energy</li>
              <li>Hydration</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Our Story</li>
              <li>Technology</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          {/* Replace the href below with your actual Instagram link */}
          <a 
            href="https://www.instagram.com/yumoraofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Yumora Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;