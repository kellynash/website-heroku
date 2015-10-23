var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema   = new Schema({
    title: String,
    author: String,
    block1: String,
    subHead1: String,
    block2: String,
    subHead2: String,
    block3: String

});

module.exports = mongoose.model('Blog', BlogSchema);