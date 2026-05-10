const express = require("express");
const app = express();

const tasksRoutes = require("./routes/tasksRoutes");

app.use(express.json());

// routes
app.use("/tasks", tasksRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});