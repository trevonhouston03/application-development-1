const express = require("express");

const router = express.Router();

const controller = require("../controllers/ordersController");

router.get("/", controller.getAllOrders);

router.get("/:id", controller.getOrder);

router.post("/", controller.createOrder);

router.patch("/:id", controller.updateOrder);

router.delete("/:id", controller.deleteOrder);

module.exports = router;