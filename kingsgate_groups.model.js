const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Groups = new Schema({
    group_name: {
        type: String
    },
});

module.exports = mongoose.model('Groups', Groups);