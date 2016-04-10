var express = require('express');
var app = express();
var routes = require('./server/routes/index.js');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/browser', express.static(path.join(__dirname, '/browser')));
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use(routes);



var PORT = process.env.PORT||1337;
app.listen(PORT, function(){
	console.log('Listening at', PORT);
});