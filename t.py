import RPi.GPIO as Gpio
import time 

Gpio.setmode(Gpio.BOARD)

Gpio.setup(7,Gpio.OUT)
Gpio.output(7,Gpio.HIGH)

try:
	Gpio.output(7,Gpio.LOW)
	print("Firsit Relay")
	time.sleep(5)
	Gpio.cleanup()
except KeyboardInterrupt:
	print("Quit")
	Gpio.cleanup()
