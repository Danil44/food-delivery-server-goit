const setTimestamp = schema => {
  schema.add({
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
  });

  schema.pre("save", function(next) {
    this.favoriteProducts = [];
    this.viewedProducts = [];
    this.orders = [];

    next();
  });
};

module.exports = setTimestamp;
