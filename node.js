var express = require('express')
, routes = require('./node_modules/routes')
, http = require('http')
, path = require('path');

var app = express();

app.get('/', routes.index);

var server = app.listen(3000,function () {
	var host = server.address().address
	var port = server.address().port
});
