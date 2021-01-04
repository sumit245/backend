const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Staffs = new Schema({
    staff_name: {
        type: String
    },
    mobile_number: {
        type: String
    },
    phone_number: {
        type: String
    },
    email_id: {
        type: String
    },
    sector:{
        type:String
    },
    block:{
        type:String
    },
    address:{
        type:String
    },
    group:{
        type:String
    },
});

module.exports = mongoose.model('Staffs', Staffs);