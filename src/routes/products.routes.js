const { Router } = require("express");
const { createProduct, getStockAvailableProducts } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/products", authenticate, createProduct);
router.get("/products/getStockAvailable", authenticate, getStockAvailableProducts);

module.exports = router;