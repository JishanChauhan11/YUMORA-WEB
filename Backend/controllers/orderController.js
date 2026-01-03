const Order = require('../models/Order');

// @desc    Create a new order
// @route   POST /api/orders
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    console.log("✅ New Order Saved:", savedOrder);
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ success: false, error: "Failed to save order" });
  }
};

// @desc    Get all orders
// @route   GET /api/orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ orderDate: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};