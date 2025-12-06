input.onButtonPressed(Button.A, function () {
    affection += 5
    timer = 0
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(2, index)
        basic.pause(300)
        led.unplot(2, index)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    affection += 10
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    change = true
})
let change = false
let timer = 0
let affection = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
loops.everyInterval(1000, function () {
    timer += 1
})
basic.forever(function () {
    if (timer == 10) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
    if (timer == 20) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Skull)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    }
})
