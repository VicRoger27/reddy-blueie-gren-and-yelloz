i2 = 0
i1 = 0
led.enable(False)
change1 = 1
change2 = 1

def on_forever():
    global i1, change1, i2, change2
    while True:
        pins.analog_write_pin(AnalogPin.P0, i1)
        pins.analog_write_pin(AnalogPin.P1, 500 - i1)
        #pins.analog_write_pin(AnalogPin.P2, i1)
        #pins.analog_write_pin(AnalogPin.P8, 500 - i1)
        pins.analog_write_pin(AnalogPin.P6, i2)
        i1 = i1 + change1
        if i1 >= 500:
            change1 = -1
        if i1 < 1:
            change1 = 1
        i2 = i2 + change2
        if i2 >= 1000:
            change2 = -1
        if i1 < 1:
            change2 = 1
        basic.pause(10)
basic.forever(on_forever)
