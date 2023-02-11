let i1 = 0
let change1 = 1
let change2 = 1
while (true) {
    let i2 = 0
    pins.analogWritePin(AnalogPin.P0, i1)
    pins.analogWritePin(AnalogPin.P1, 500 - i1)
    pins.analogWritePin(AnalogPin.P2, i1)
    pins.analogWritePin(AnalogPin.P8, 500 - i1)
    pins.analogWritePin(AnalogPin.P16, i2)
    i1 = i1 + change1
    if (i1 >= 500) {
        change1 = -1
    }
    if (i1 < 0) {
        change1 = 1
    }
    i1 = i1 + change1
    if (i2 >= 1000) {
        change2 = -1
    }
    if (i1 < 0) {
        change2 = 1
    }
    basic.pause(100)
}
