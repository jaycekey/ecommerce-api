const { Router } = require("express");
const { userRegister } = require("../controllers")
const authenticate = require("../middlewares/auth.middleware")

const router = Router();

router.post("/users", userRegister)

module.exports = router;