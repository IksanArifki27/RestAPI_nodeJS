var express = require("express");
const Validator = require("fastest-validator");
// const Product = require("../models/Product");
const { Product } = require("../models");
var router = express.Router();

const v = new Validator();
// get all data
router.get("/", async (req, res) => {
  const product = await Product.findAll();
  res.json({ data: product });
});
// find data by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  res.json({ data: product || {} });
});
// create data
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    brand: "string",
    description: "string| optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    res.status(400).json(validate);
  }
  const product = await Product.create(req.body);
  res.json(product);
});
// update data
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  let product = await Product.findByPk(id);
  if (!product) {
    res.json({
      message: "product not found",
    });
  }
  const schema = {
    name: "string|optional",
    brand: "string|optional",
    description: "string|optional",
  };
  const validate = v.validate(req.body, schema);
  if (validate.length) {
    res.status(400).json(validate);
  }
  product = await product.update(req.body);
  res.json(product);
});

// delete data
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let product = await Product.findByPk(id);

  if (!product) {
    res.json({ message: "product not found!" });
  }
  product = await product.destroy();
  res.json({ message: "data is deleted!" });
});

module.exports = router;
