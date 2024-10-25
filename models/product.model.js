const mongoose = require('mongoose');

const skuSchema = new mongoose.Schema({
    sku: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    feature: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const ProductSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    skus: [skuSchema]
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
