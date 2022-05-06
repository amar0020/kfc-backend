const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  image_link: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  bonus: { type: String, required: true }
});

module.exports = mongoose.model("kfcproduct", productSchema);