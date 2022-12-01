const {
  Users,
  Cart,
  Orders,
  Products,
  ProductsInCart,
  ProductsInOrders
} = require("./index");

const initModels = () => {
  Users.hasOne(Cart, { foreignKey: "user_id" });
  Cart.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasMany(Orders, { foreignKey: "user_id" });
  Orders.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasMany(Products, { foreignKey: "user_id" });
  Products.belongsTo(Users, { foreignKey: "user_id" });

  Products.hasMany(ProductsInCart, {foreignKey: "product_id"});
  ProductsInCart.belongsTo(Products, {foreignKey: "product_id"});
  
  Cart.hasMany(ProductsInCart, { foreignKey: "cart_id" });
  ProductsInCart.belongsTo(Cart, { foreignKey: "cart_id" });

  Products.hasMany(ProductsInOrders, {foreignKey: "product_id"});
  ProductsInOrders.belongsTo(Products, {foreignKey: "product_id"});

  Orders.hasMany(ProductsInOrders, {foreignKey: "order_id"});
  ProductsInOrders.belongsTo(Orders, {foreignKey: "order_id"});

};

module.exports = initModels;
