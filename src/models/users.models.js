const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcript = require("bcrypt");

const Users = db.define(
  "users",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "user_id",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcript.hashSync(password, 8);
        user.password = hash;
      },
    },
  }
);

module.exports = Users;
