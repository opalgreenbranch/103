let i: number;
led.plot(0, 0)
let x = 0
let y = 0
for (i = 0; i < 4; i++) {
    y += 1
    x += 1
    led.plot(x, y)
    basic.pause(200)
}
y = 0
for (i = 0; i < 4; i++) {
    led.plot(x, y)
    y += 1
    x -= 1
    basic.pause(200)
}
for (i = 0; i < 4; i++) {
    led.plot(x, y)
    y -= 1
    basic.pause(200)
}
for (i = 0; i < 4; i++) {
    x += 1
    led.plot(x, y)
    basic.pause(200)
}
for (i = 0; i < 4; i++) {
    y += 1
    led.plot(x, y)
    basic.pause(200)
}
for (i = 0; i < 4; i++) {
    x -= 1
    led.plot(x, y)
    basic.pause(200)
}
basic.pause(2000)
basic.clearScreen()
basic.pause(500)
basic.showString("Done! Created by opalgreenbranch with Python.")
