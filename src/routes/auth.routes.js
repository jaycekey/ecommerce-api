const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Login user
 *     tags: 
 *      - Users
 *     requestBody:
 *       description: To login you need first register the user and then login with email and password
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: example@gmail.com
 *                 password:
 *                   type: string
 *                   example: 1234
 *     securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 */
router.post("/auth/login", userLogin);

module.exports = router;
