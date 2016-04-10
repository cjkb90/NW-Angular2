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
	});
});

router.get('/api/salespeople/find/:id', function(req, res){
	return Salesperson.findById(req.params.id)
	.then(function(data){
		res.send(data);
	});
});

router.put('/api/salespeople/find/:id', function(req, res){
	return Salesperson.findById(req.params.id)
	.then(function(data){
		console.log('data is',data)
		data.region=req.body.region;
		console.log('body is',req.body);
		res.sendStatus(200);
		return Salesperson.save();
	});
});

router.post('/api/salespeople/add/:spName', function(req, res){
	var newSP = new Salesperson({name: req.params.spName, regions: req.body})
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