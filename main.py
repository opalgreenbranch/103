led.plot(0, 0)
x = 0
y = 0

for i in range(4):
    y += 1
    x += 1
    led.plot(x, y)
    basic.pause(200)    

y = 0
for i in range(4):
    led.plot(x, y)
    y += 1
    x -= 1
    basic.pause(200)

for i in range(4):
    led.plot(x, y)
    y -= 1
    basic.pause(200)
for i in range(4):
    x += 1
    led.plot(x, y)
    basic.pause(200)
for i in range(4):
    y += 1
    led.plot(x, y)
    basic.pause(200)
for i in range(4):
    x -= 1
    led.plot(x, y)
    basic.pause(200)
basic.pause(2000)
basic.clear_screen()
basic.pause(500)
basic.show_string("Done! Created by opalgreenbranch with Python.")