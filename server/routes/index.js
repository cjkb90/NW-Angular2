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
		res.send(response);
	})
});

router.delete('/api/salespeople/delete/:id', function(req, res){
	Salesperson.find({_id: req.params.id})
	.remove()
	.exec()
	.catch(function(err){
		console.log(err);
	})
});

module.exports = router;