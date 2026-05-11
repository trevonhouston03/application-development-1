const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { requireLogin } = require("../middleware/authMiddleware");

router.post("/login", authController.login);
router.post("/logout", requireLogin, authController.logout);
router.get("/profile", requireLogin, authController.profile);

module.exports = router;