const { Router } = require("express");
const { addProduct, getUserCart, purchaseCart } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

/**
 * @openapi
 * /api/v1/cart:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add product to cart
 *     tags: [Cart & Orders]
 *     requestBody:
 *       description: To add product to cart you need to specify the userID, product and quantity to add
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: int
 *                  example: 5
 *                productId:
 *                  type: int
 *                  example: 5
 *                quantity:
 *                  type: int
 *                  example: 1
 *     securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Gets the user cart
 *     tags: [Cart & Orders]
 *     requestBody:
 *       description:  To get cart you need to specify the userID
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: int
 *                  example: 5
 *     securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * api/v1/cart/purchase/:userId:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Purchase cart
 *     tags: [Cart & Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: You need to specify the userId
 */

router.post("/cart", authenticate, addProduct);
router.get("/cart", authenticate, getUserCart);

router.post("/cart/purchase/:userId", authenticate, purchaseCart);

module.exports = router;