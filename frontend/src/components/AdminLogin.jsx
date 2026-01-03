import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck } from 'lucide-react';
import './AdminPanel.css'; // We'll reuse the admin styles

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        onLogin(); // Unlock the dashboard
      } else {
        setError('Access Denied');
      }
    } catch (err) {
      setError('Server Connection Error');
    }
    setLoading(false);
  };

  return (
    <div className="admin-container login-mode">
      <motion.div 
        className="login-box"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="icon-wrapper">
          <Lock size={40} color="#eab308" />
        </div>
        <h2>Restricted Area</h2>
        <p>Enter Admin Password to continue.</p>

        <form onSubmit={handleSubmit}>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Unlock Dashboard"}
          </button>
        </form>

        {error && <motion.p className="error-msg" animate={{ x: [-10, 10, 0] }}>{error}</motion.p>}
      </motion.div>
    </div>
  );
};

export default AdminLogin;