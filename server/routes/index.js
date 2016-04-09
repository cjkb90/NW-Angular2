var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	res.send('Hello');
});

router.get('/printme/:printString', function(req,res){
	res.send(req.params.printString);
});

module.exports = router;