input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
basic.forever(function () {
	
})
