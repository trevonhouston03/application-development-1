const express = require("express");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

require("./db");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false
  })
);

app.use("/", authRoutes);
app.use("/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found."
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});