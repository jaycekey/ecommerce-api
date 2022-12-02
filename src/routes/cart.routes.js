const { Router } = require("express");
const { addProduct, getUserCart, purchaseCart } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/cart", authenticate, addProduct);
router.get("/cart", authenticate, getUserCart);

router.post("/cart/purchase/:userId", authenticate, purchaseCart);

module.exports = router;