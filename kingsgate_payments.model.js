const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Payment = new Schema({
  challan_number: {
    type: String,
  },
  client_name: {
    type: String,
  },
  payment_details: {
    collected_by: { type: String },
    collection_date: { type: String },
    payment_mode: {
      type: String,
    },
    payment_method:{
      type:String
    },
    balance: { type: String },
  },
  status: {
    type: String,
  },
});
module.exports = mongoose.model('Payment', Payment);
