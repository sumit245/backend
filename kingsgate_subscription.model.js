const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subscription = new Schema({
    client_name: {
        type: String
    },
    mobile_number:{
        type:String
    },
    factory_name:{
        type:String
    },
    subscription_type:{
        type:String
    },
    start_date:{
        type:String
    },
    end_date:{
        type:String
    }
});

module.exports = mongoose.model('Subscription', Subscription);