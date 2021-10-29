input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B) || zähler <= 1) {
    	
    } else {
        zähler += -1
        basic.showNumber(zähler)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (zähler == geheimzahl) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        geheimzahl = randint(1, 6)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A) || zähler >= 6) {
    	
    } else {
        zähler += 1
        basic.showNumber(zähler)
    }
})
let geheimzahl = 0
let zähler = 0
zähler = 5
geheimzahl = randint(1, 6)
