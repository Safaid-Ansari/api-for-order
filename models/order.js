const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  listTitle: {
    type: String,
    required: true,
  },
  listDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("order", orderSchema);
