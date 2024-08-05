const express = require('express');
const router = express.Router();
const { createProduct, checkout } = require('../controllers/productControllers/post');
const { getAllProducts, getProductById } = require('../controllers/productControllers/get');
const { createUser, login } = require('../controllers/userControllers/post');

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

router.post('/products', createProduct);
router.post('/checkout', checkout);

router.post('/register', createUser);
router.post('/login', login);

module.exports = router;