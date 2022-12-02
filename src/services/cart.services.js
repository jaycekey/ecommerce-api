const { Cart, Products, ProductsInCart } = require("../models");

class CartServices {
  static async create(cart) {
    try {
      const result = await Cart.create(cart);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addProduct({userId, productId, quantity}) {
    try {
      const cart = await Cart.findOne({where: {userId: userId}});
      const product = await Products.findOne({where: {productId: productId}})
      const result = await ProductsInCart.create({
        cartId: cart.cartId,
        productId: productId,
        quantity: quantity,
        price: product.price,
        status: product.status
      })
      return result;
    } catch (error) {
      throw error;
    } 
  }
  static async getByUserId(userId) {
    try {
      const cart = await Cart.findOne({where: {userId: userId}});
      const cartProducts = await ProductsInCart.findAll({
        where: {cartId: cart.cartId},
        attributes: ["id", "quantity"],
        include: {
          model: Products,
          attributes: ["productId","name","image","price", "status"],
        }
      })
      return cartProducts;
    } catch (error) {
      throw error;
    } 
  }
}

module.exports = CartServices;