require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
// Connects to the URL you put in your .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- DEFINE THE DATA MODEL ---
// This tells MongoDB what an order looks like
const OrderSchema = new mongoose.Schema({
  flavor: { type: String, required: true },
  quantity: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

// --- ROUTES ---

// 1. POST: Save a new order to MongoDB
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    
    console.log("✅ New Order Saved to DB:", savedOrder);
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ success: false, error: "Failed to save order" });
  }
});

// 2. GET: Retrieve all orders from MongoDB (For Admin Panel)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 }); // Newest first
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));