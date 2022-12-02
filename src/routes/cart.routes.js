const { Router } = require("express");
const { addProduct, getUserCart } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/cart", authenticate, addProduct);
router.get("/cart", authenticate, getUserCart);

module.exports = router;