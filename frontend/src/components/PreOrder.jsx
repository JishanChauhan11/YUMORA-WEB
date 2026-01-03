import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import './PreOrder.css';

const PreOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 1. Get state passed from ProductLineup (if any)
  const initialProduct = location.state?.product || "Turbo Energy";
  const isLocked = location.state?.locked || false;

  const [formData, setFormData] = useState({
    flavor: initialProduct,
    quantity: 1,
    name: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Updated Submit Handler: Sends data to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Wait 3 seconds then go back home
        setTimeout(() => {
          navigate('/Home');
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to connect to the server. Is the backend running?");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="preorder-success">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="success-message"
        >
          <CheckCircle size={80} color="#4ade80" />
          <h2>Order Confirmed!</h2>
          <p>We'll contact you at {formData.phone} shortly.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="preorder-page">
      <button className="back-btn" onClick={() => navigate('/Home')}>
        <ArrowLeft size={20} /> Back
      </button>

      <motion.div 
        className="form-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>PRE-ORDER YOUR FUEL</h2>
        <p>Be the first to experience the future of freshness.</p>

        <form onSubmit={handleSubmit}>
          
          {/* Flavor Selection Logic */}
          <div className="form-group">
            <label>Selected Flavor</label>
            {isLocked ? (
              // Read-Only View (If clicked 'Shop' on a specific bottle)
              <div className="locked-input" style={{ 
                  background: '#222', 
                  padding: '12px 15px', 
                  borderRadius: '8px', 
                  border: '1px solid #444', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px' 
              }}>
                <span style={{ fontWeight: 'bold' }}>{formData.flavor}</span>
                <Lock size={14} color="#666" />
              </div>
            ) : (
              // Dropdown View (If clicked general 'Pre-Order' button)
              <select name="flavor" value={formData.flavor} onChange={handleChange}>
                <option value="Turbo Energy">Turbo Energy (Citrus Rush)</option>
                <option value="Pure Hydration">Pure Hydration (Ocean Blue)</option>
                <option value="Cold Brew">Cold Brew (Midnight Roast)</option>
              </select>
            )}
          </div>

          <div className="form-group">
            <label>Quantity (Packs of 6)</label>
            <input 
              type="number" 
              name="quantity" 
              min="1" 
              max="20" 
              value={formData.quantity} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required placeholder="John Doe" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" required placeholder="+1 234 567 890" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Shipping Address</label>
            <textarea name="address" required placeholder="Street Address" rows="2" onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" required placeholder="New York" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input type="text" name="zip" required placeholder="10001" onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "PROCESSING..." : "CONFIRM PRE-ORDER"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PreOrder;