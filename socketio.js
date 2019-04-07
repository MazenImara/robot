console.log('started ...');
var socket = require('socket.io-client')('https://signaling.bestchoice.live');
socket.emit('create or join', 'robot.1');
socket.on('connect', function(){ console.log('connected'); });
socket.on('disconnect', function(){ console.log('disconnected'); });

socket.on('event', function(data){
	console.log(data);
});
