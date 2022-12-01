const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const handleError = require("./middlewares/error.middleware");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const { userRoutes, authRoutes } = require("./routes")

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: true }) // devuelve una promesa
  .then(() => console.log("Sincronizado correctamente"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({message: "Bienvenido al server"})
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use(handleError);

module.exports = app;
