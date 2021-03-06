var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);
console.log('Server Running...');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
	console.log('Socket Connected...');

	// Send Message
	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data});
	});
});