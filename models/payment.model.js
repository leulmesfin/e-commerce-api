const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['credit', 'debit'],
    required: true
  },
  card: {
    type: {
      type: String,
      enum: ['visa', 'mastercard', 'amex', 'discover'],
      required: true
    },
    number: {
      type: String,
      required: true
    },
    exprMonth: {
      type: Number,
      min: 1,
      max: 12,
      required: true
    },
    exprYear: {
      type: Number,
      required: true
    },
    cvv: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
