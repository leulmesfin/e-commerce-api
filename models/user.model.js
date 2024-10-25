const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  address: {
    country: {
      type: String,
      required: true
    },
    street1: {
      type: String,
      required: true
    },
    street2: {
      type: String,
      required: false
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

module.exports = mongoose.model('User', userSchema);
