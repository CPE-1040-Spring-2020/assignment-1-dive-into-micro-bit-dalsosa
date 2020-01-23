let iconheart: boolean = true

input.onButtonPressed(Button.A, function () {
    iconheart = !iconheart
})


basic.forever(function () {
    if (iconheart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Butterfly)
    }
    basic.pause(100)
    basic.clearScreen()
})
