const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Challan = new Schema({
    challan_num:{
        type:String
    },
    client_name: {
        type: String
    },
    mobile_number:{
        type:String
    },
    company:{
        type:String
    },
    address:{
        type:String
    },
    item_name:{
        type:String
    },
    item_cost:{
        type:String
    },
    item_disc:{
        type:String
    },
    item_price:{
        type:String
    },
    grand_total:{
        type:String

    },
    challan_date:{
        type:String
    },
    grand_disc:{
        type:String

    },
    balance:{
        type:String
    }
});

module.exports = mongoose.model('Challan', Challan);