const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");

const {
  requireLogin
} = require("../middleware/authMiddleware");

router.get("/", requireLogin, tasksController.getTasks);

router.get("/:id", requireLogin, tasksController.getTaskById);

router.post("/", requireLogin, tasksController.createTask);

router.patch("/:id", requireLogin, tasksController.updateTask);

router.delete("/:id", requireLogin, tasksController.deleteTask);

module.exports = router;