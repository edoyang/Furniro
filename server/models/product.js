const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

productSchema.plugin(AutoIncrement, {inc_field: 'id'});
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;