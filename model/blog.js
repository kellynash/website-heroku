var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema   = new Schema({
    title: String,
    body: String,
    id: Number
});

module.exports = mongoose.model('Blog', BlogSchema);