const express = require("express");
const {
  addordersController,
  getordersController,
  editordersController,
} = require("../controllers/orderController");

const router = express.Router();

//routes

//MEthod - POST
router.post("/add-orders", addordersController);

//MEthod - GET
router.get("/get-orders", getordersController);

//method - PUT
router.put("/edit-orders",editordersController);

module.exports = router;