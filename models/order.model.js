const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['processed', 'pending', 'failed'],
    required: true
  },
  status: {
    type: String,
    enum: ['shipped', 'processing', 'delivered', 'canceled'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  items: [
    {
      sku: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  shippingAddress: {
    country: {
      type: String,
      required: true
    },
    street1: {
      type: String,
      required: true
    },
    street2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);
