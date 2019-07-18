var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(7, 'out'); //use GPIO pin 4, and specify that it is output
LED.writeSync(0); 