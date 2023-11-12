const mongoose = require('mongoose');

const productModel = mongoose.Schema({
 title:String,
 description:String,
 image:String
});

module.exports = mongoose.model('products',productModel);