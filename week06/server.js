const express = require("express");

const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found"
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});