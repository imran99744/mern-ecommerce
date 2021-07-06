const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProductById,
} = require("../controller/productControllers");

// @desc Get all products from db
// @route Get /api/products
// @access Public
router.get("/", getAllProduct);

// @desc Get a product from db
// @route Get /api/products/:id
// @access Public
router.get("/:id", getProductById);

module.exports = router;
