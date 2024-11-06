const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id: {
        unique: true,
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "",
    },
    rating: {
        rate: {
            type: Number
        },
        count: {
            type: Number
        }
    },
    category: {
        type: String,
        default: "electronics"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;