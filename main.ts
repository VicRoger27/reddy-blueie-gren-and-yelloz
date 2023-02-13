let i2 = 0
let i1 = 0
led.enable(false)
let change1 = 1
let change2 = 1
basic.forever(function () {
    while (true) {
        pins.analogWritePin(AnalogPin.P0, i1)
        pins.analogWritePin(AnalogPin.P1, 500 - i1)
        // pins.analog_write_pin(AnalogPin.P2, i1)
        // pins.analog_write_pin(AnalogPin.P8, 500 - i1)
        pins.analogWritePin(AnalogPin.P6, i2)
        i1 = i1 + change1
        if (i1 >= 500) {
            change1 = -1
        }
        if (i1 < 1) {
            change1 = 1
        }
        i2 = i2 + change2
        if (i2 >= 1000) {
            change2 = -1
        }
        if (i1 < 1) {
            change2 = 1
        }
        basic.pause(10)
    }
})
