const { userRegister } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createProduct, getStockAvailableProducts } = require("./products.controllers");
const { addProduct, getUserCart } = require("./cart.controllers");

module.exports = {
  userRegister,
  userLogin,
  createProduct,
  getStockAvailableProducts,
  addProduct,
  getUserCart
};