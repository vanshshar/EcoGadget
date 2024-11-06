const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
    phoneNumber: {
        type: Number,
        required: true,
        max: 10,
        min: 10
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "upi", "card", "paypal"],
        required: true
    },
    geometry: {
        type: {
            tye: "String",
            enum: ["Point"],
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

module.exports = mongoose.model("Delivery", deliverySchema);