input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() <= 128) {
        led.setBrightness(input.lightLevel())
    }
})
basic.forever(function () {
	
})
