const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");
const validateProduct = require("../middleware/validateProduct");

// GET
router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProduct);

// WRITE OPERATIONS (protected + validated)
router.post("/", validateProduct, controller.createProduct);
router.patch("/:id", validateProduct, controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;