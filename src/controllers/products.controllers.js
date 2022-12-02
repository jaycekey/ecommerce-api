const { ProductServices } = require("../services");

const createProduct = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductServices.create(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const getStockAvailableProducts = async (req, res, next) => {
  try {
    const result = await ProductServices.getStockAvailable();
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

module.exports = {
  createProduct,
  getStockAvailableProducts
};
