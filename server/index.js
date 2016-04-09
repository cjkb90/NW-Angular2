var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NW-Angular2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var salespersonSchema = new mongoose.Schema({
	name: {type: String, required: true},
	region: String
});

var Salesperson = mongoose.model('Salesperson', salespersonSchema);

module.exports = {
	Salesperson: Salesperson
};