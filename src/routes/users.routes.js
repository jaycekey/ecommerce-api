const { Router } = require("express");
const { userRegister } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware")

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register User
 *     tags: [Users]
 *     requestBody:
 *       description: To login you need first register the user and then login with email and password
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: username
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
router.post("/users", userRegister)

module.exports = router;