const { where } = require("sequelize");
const { Cart, Products, ProductsInCart, ProductsInOrders } = require("../models");

class CartServices {
  static async create(cart) {
    try {
      const result = await Cart.create(cart);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addProduct({ userId, productId, quantity }) {
    try {
      const cart = await Cart.findOne({ where: { userId: userId } });
      const product = await Products.findOne({
        where: { productId: productId },
      });

      /* Stock */
      const available = product["stock"];
      if (available === 0) {
        throw new Error(
          `There no are more ${product["name"]} available in stock`
        );
      } else if (quantity > available) {
        throw new Error(
          `There are only ${available} available ${product["name"]} in stock`
        );
      } else {
        const newStock = available-quantity;
        await Products.update({ stock: newStock }, {where: {productId: productId}});
      }
      const result = await ProductsInCart.create({
        cartId: cart.cartId,
        productId: productId,
        quantity: quantity,
        price: product.price,
        status: product.status,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getByUserId(userId) {
    try {
      const cart = await Cart.findOne({ where: { userId: userId } });
      const cartProducts = await ProductsInCart.findAll({
        where: { cartId: cart.cartId },
        attributes: ["id", "quantity"],
        include: {
          model: Products,
          attributes: ["productId", "name", "image", "price", "status"],
        },
      });
      return cartProducts;
    } catch (error) {
      throw error;
    }
  }
  static async purchase(userId) {
    try {
      const cart = await Cart.findOne({ where: { userId: userId } });
      await ProductsInCart.update(
        { status: "Purchased" },
        { where: { cartId: cart.cartId } }
      );
      const result = await ProductsInCart.findAll({ where: { cartId: cart.cartId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async cleanCart(userId) {
    try {
      const cart = await Cart.findOne({ where: { userId: userId } });
      const result = ProductsInCart.destroy({ where: { cartId: cart.cartId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;
