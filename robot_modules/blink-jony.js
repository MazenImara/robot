// Blink an LED
var five = require("johnny-five");
var board = new five.Board({io: new Raspi()});

board.on("ready", function() {
  var led = new five.Led('P1-7');
  led.blink();
});