const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "A Basic Ecommerce API",
    },
  },
  apis: [
    "./src/routes/auth.routes.js",
    "./src/routes/users.routes.js",
    "./src/models/users.models.js",
    "./src/routes/products.routes.js",
    "./src/models/products.models.js",
    "./src/routes/cart.routes.js",
    "./src/models/cart.models.js",
    "./src/models/orders.models.js",
    "./src/models/productsInCart.models.js",
    "./src/models/productInOrders.models.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Doc V1 disponible en http://localhost:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };
