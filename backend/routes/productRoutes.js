const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

//@desc Get all products from the database
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc Get a product by Id provided from the database
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

// router.post("/", async (req, res) => {});

module.exports = router;
