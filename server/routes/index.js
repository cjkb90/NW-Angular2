var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../index.js');
var Salesperson = db.Salesperson;

var indexHtml = path.join(__dirname, '..', '..', 'public', 'index.html');

router.get('/', function(req,res){
	res.sendFile(indexHtml);
});

router.get('/api/salespeople', function(req, res){
	Salesperson.find()
	.then(function(data){
		res.send(data);
		//console.log(data);
	});
});

router.post('/api/salespeople/add/:spName', function(req, res){
	var newSP = new Salesperson({name: req.params.spName})
	newSP.save()
	.then(function(response){
		//console.log(response);
		res.send(response);
	})
});

module.exports = router;