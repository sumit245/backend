const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Task=new Schema({
    task_type:{type:String},
    assigned_to:{type:String},
    group:{type:String},
    status:{type:String}
});
module.exports = mongoose.model('Task', Task);