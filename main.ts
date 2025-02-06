radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        kitronik_servo_lite.turnLeft(90)
    } else if (receivedString == "B") {
        kitronik_servo_lite.turnRight(90)
    } else if (receivedString == "A+B") {
        kitronik_servo_lite.driveForwards(100)
    } else {
        basic.showString("??")
        music.play(music.stringPlayable("C5 A B G A F G E ", 360), music.PlaybackMode.UntilDone)
        basic.showString(receivedString)
    }
})
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
radio.setGroup(1)
