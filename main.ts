input.onButtonPressed(Button.A, function () {
    RED()
    basic.pause(1000)
    Green()
    basic.pause(1000)
    yellow()
})
function RED () {
    Range = Strip.range(0, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Red))
    Range = Strip.range(1, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
    Range = Strip.range(2, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function yellow () {
    Range = Strip.range(0, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
    Range = Strip.range(1, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    Range = Strip.range(2, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Green () {
    Range = Strip.range(0, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
    Range = Strip.range(1, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Black))
    Range = Strip.range(2, 1)
    Range.showColor(neopixel.colors(NeoPixelColors.Green))
}
let Range: neopixel.Strip = null
let Strip: neopixel.Strip = null
basic.showIcon(IconNames.Asleep)
Strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
Strip.setBrightness(20)
