import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Smartphone, MapPin, Clock, LogOut } from 'lucide-react';
import AdminLogin from './AdminLogin'; // Import Login Component
import './AdminPanel.css';

const AdminPanel = () => {
  // 1. Check if user was already logged in (saved in browser)
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('adminAuth') === 'true'
  );
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Handle Login Success
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('adminAuth', 'true'); // Keep them logged in
  };

  // 3. Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchOrders = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/orders');
          const data = await response.json();
          setOrders(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching orders:", error);
          setLoading(false);
        }
      };
      fetchOrders();
    }
  }, [isAuthenticated]);

  // 4. If NOT authenticated, show Login Screen
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-container">
      <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ margin: 0, border: 'none' }}
        >
          Admin Dashboard <span>({orders.length} Orders)</span>
        </motion.h1>

        <button onClick={handleLogout} className="logout-btn" style={{ background: 'none', border: '1px solid #333', color: '#666', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <motion.tr 
                key={order._id || order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <td>
                  <div className="icon-text">
                    <Clock size={14} color="#888" />
                    {new Date(order.orderDate || order.date).toLocaleDateString()}
                  </div>
                  <small>{new Date(order.orderDate || order.date).toLocaleTimeString()}</small>
                </td>
                <td>
                  <strong>{order.name}</strong>
                  <div className="icon-text">
                    <Smartphone size={14} color="#888" /> {order.phone}
                  </div>
                </td>
                <td>
                  <span className={`badge ${order.flavor.includes("Energy") ? "yellow" : order.flavor.includes("Hydration") ? "blue" : "brown"}`}>
                    {order.flavor}
                  </span>
                </td>
                <td className="center-text">{order.quantity}</td>
                <td>
                  <div className="icon-text">
                    <MapPin size={14} color="#888" />
                    {order.city}, {order.zip}
                  </div>
                  <small>{order.address}</small>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="empty-state">
            <Package size={48} color="#333" />
            <p>No orders received yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;