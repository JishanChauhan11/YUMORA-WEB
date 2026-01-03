const mongoose = require('mongoose');

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

module.exports = mongoose.model('Order', OrderSchema);