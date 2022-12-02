const { Cart } = require("../models");
const { CartServices } = require("../services");

const addProduct = async (req, res, next) => {
  try {
    const {userId, productId, quantity} = req.body;
    const result = await CartServices.addProduct({userId, productId, quantity})
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getUserCart = async (req, res, next)=> {
  try {
    const {userId} = req.body;
    const result = await CartServices.getByUserId(userId);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
}
module.exports = {
  addProduct,
  getUserCart
};
