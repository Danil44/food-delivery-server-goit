const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  product: Number,
  size: {
    type: String,
    required: true,
    enum: ["M", "XL", "XXL"]
  },
  itemsCount: Number
});

const orderSchema = new Schema({
  id: String,
  creator: String,
  productsList: [productSchema],
  deliveryType: {
    type: String,
    enum: ["delivery", "office"]
  },
  deliveryAdress: String,
  sumToPay: Number,
  status: {
    type: String,
    required: true,
    enum: ["inProgress", "declined", "finished", "failed"]
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
