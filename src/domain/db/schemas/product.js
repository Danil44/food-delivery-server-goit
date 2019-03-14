const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  sku: Number,
  name: String,
  description: String,
  price: String,
  currency: String,
  creatorId: String,
  created: String,
  modified: String,
  likes: Number,
  categories: Array
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
