const Product = require("../db/schemas/product");
const Ingredient = require("../db/schemas/ingredient");
const mongoose = require("mongoose");

const addIngredients = () => {
  const ingredient = new Ingredient({
    _id: new mongoose.Types.ObjectId(),
    name: "tomato",
    description: "Description to tomato"
  });
  Product.find({name: "Полеет"})
    .populate("ingredients")
    .exec(function(err, product) {
      if (err) console.log(err);
      console.log(product);
    });
};

module.exports = addIngredients;
