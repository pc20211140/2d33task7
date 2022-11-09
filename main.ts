input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() <= 100) {
        led.setBrightness(255)
    }
})
basic.forever(function () {
	
})
