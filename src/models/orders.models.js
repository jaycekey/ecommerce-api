const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("orders", 
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "order_id"
    },
    userId: {
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
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    timestamps: false
  }
)

module.exports = Orders;