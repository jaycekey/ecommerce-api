const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Cart = db.define("cart", 
  {
    cartId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "cart_id"
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
      field: "user_id",
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "total_price"
    }
  }, {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = Cart;