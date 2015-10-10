var express = require('/usr/local/lib/node_modules/express')
var app = express()

app.get('/', function (req,res) {
	res.send('/home/usuario/Documentos/cine/index.html')
})

var server = app.listen(3000,function () {
	var host = server.address().address
	var port = server.address().port
})
