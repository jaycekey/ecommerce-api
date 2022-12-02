const { Orders, ProductsInOrders } = require("../models");

class OrderServices {
  static async create(userId, purchasedProducts) {
    try {
      const result = await Orders.create({
        userId: userId,
        totalPrice: 0,
        status: 1,
      });
      const order = Orders.findOne({ where: { userId: userId }});
      purchasedProducts.forEach(async (product) => {
        await ProductsInOrders.create({
          orderId: order.orderId,
          productId: product.productId,
          quantity: product.quantity,
          price: product.price,
          status: 1,
        });
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
