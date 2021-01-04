const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Factories = new Schema({
    client_name: {
        type: String
    },
    mobile_number: {
        type: String
    },
    factory_name: {
        type: String
    },
    factory_sector:{
        type:String
    },
    factory_block:{
        type:String
    },
    factory_address:{
        type:String
    },
    factory_group:{
        type:String
    },
    factory_closedate:{
        type:String
    }
});

module.exports = mongoose.model('Factories', Factories);