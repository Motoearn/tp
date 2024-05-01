const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    tableNumber: {
      type: Number,
      required: true,
    },
    orderItems: {
      type: Array,
      required: true,
    },
    orderType:{
        type: String,
        required:true,
    },
    tastePreference:{
        type: String,
        required:false,
    },
    orderTime:{
      type: String,
      required: false,
      default: "00:00"
        },

  },
  { timestamp: true }
);

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;