const { userRegister } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");

module.exports = {
  userRegister,
  userLogin
};