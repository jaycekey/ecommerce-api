const { Op } = require("sequelize");
const { Products, Users } = require("../models");

class ProductServices {
  static async create(product) {
    try {
      const result = await Products.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getStockAvailable() {
    try {
      const products = await Products.findAll({
        where: {
          stock: {
            [Op.gt]: 0,
          },
        },
        include: {
          model: Users,
          as: "Seller",
          attributes: ["username"]
        }
      });
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
