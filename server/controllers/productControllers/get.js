const Product = require("../../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Error fetching products", error: error });
  }
};

exports.getProductById = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findOne({ id: productId });
      if (!product) {
        return res.status(404).send({ message: "Product not found" });
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send({ message: "Error fetching product", error: error });
    }
  };