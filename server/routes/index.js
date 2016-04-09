var express = require('express');
var router = express.Router();
var path = require('path');

var indexHtml = path.join(__dirname, '..', '..', 'public', 'index.html');

router.get('/', function(req,res){
	res.sendFile(indexHtml);
});

router.get('/printme/:printString', function(req,res){
	res.send(req.params.printString);
});

module.exports = router;