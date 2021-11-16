input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() > 28) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        soundExpression.spring.playUntilDone()
    } else if (input.temperature() < 4) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        soundExpression.sad.playUntilDone()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
