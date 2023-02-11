i1 = 0
i2 = 0
change1 = 1
change2 = 1
while True:
    pins.analog_write_pin(AnalogPin.P0, i1)
    pins.analog_write_pin(AnalogPin.P1, 500-i1)
    pins.analog_write_pin(AnalogPin.P2, i1)
    pins.analog_write_pin(AnalogPin.P8, 500-i1)
    pins.analog_write_pin(AnalogPin.P16, i2)

    i1 = i1 + change1
    if i1 >= 500:
        change1 = -1
    if i1 < 0:
        change1 = 1

    i1 = i1 + change1
    if i2 >= 1000:
        change2 = -1
    if i1 < 0:
        change2 = 1


