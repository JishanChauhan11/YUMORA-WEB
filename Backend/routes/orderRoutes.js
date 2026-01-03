const express = require('express');
const router = express.Router();
const { createOrder, getOrders } = require('../controllers/orderController');

// POST /api/orders -> Create an order
router.post('/', createOrder);

// GET /api/orders -> Get all orders
router.get('/', getOrders);

module.exports = router;