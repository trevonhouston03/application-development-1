const express = require("express");

const app = express();

const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");

const timer = require("./middleware/timer");
const apiKey = require("./middleware/apiKey");

app.use(express.json());

// MUST COME FIRST (timing)
app.use(timer);

// API KEY middleware (protects write operations)
app.use(apiKey);

app.use("/products", productsRoutes);
app.use("/orders", ordersRoutes);

// 404 handler
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