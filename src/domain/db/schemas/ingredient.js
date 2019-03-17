const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientsSchema = new Schema({
  name: String,
  description: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Ingredient = mongoose.model("Ingredient", ingredientsSchema);

module.exports = Ingredient;
