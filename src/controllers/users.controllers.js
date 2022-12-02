const { UserServices, CartServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    const userData = result["dataValues"];
    console.log(userData);
    await CartServices.create({userId: userData["userId"]});
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
  userRegister
}