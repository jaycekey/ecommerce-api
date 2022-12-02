const { Router } = require("express");
const { createProduct, getStockAvailableProducts } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create product
 *     tags: [Products]
 *     requestBody:
 *       description: To create a product you need send the product info, check the following example
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: iphone12
 *                image:
 *                  type: string
 *                  example: imageURL
 *                price:
 *                  type: int
 *                  example: 100
 *                stock:
 *                  type: int
 *                  example: 5
 *                status:
 *                  type: varchar
 *                  example: Available
 *                userId:
 *                  type: int
 *                  example: 1
 *     securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/v1/products/getStockAvailable:
 *  get:
 *    security:
 *       - bearerAuth: []
 *    summary: Gets the available to buy products
 *    tags: [Products]
 *    securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 */

router.post("/products", authenticate, createProduct);
router.get("/products/getStockAvailable", authenticate, getStockAvailableProducts);

module.exports = router;