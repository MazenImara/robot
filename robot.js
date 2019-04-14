
var socket = require('socket.io-client')('https://signaling.bestchoice.live');
var cmd = require('./robot_modules/cmd');




console.log('started ...');
socket.emit('create or join', 'robot.1');
socket.on('createRoom', function(){ socket.emit('create or join', 'robot.1'); });
socket.on('connect', function(){ console.log('connected'); });
socket.on('disconnect', function(){ console.log('disconnected'); });

socket.on('cmd', function(strCmd){
	cmd.exec(strCmd);
});

