input.onButtonPressed(Button.A, function () {
    if (paleta_A.get(LedSpriteProperty.X) > 0) {
        paleta_A.change(LedSpriteProperty.X, -1)
        paleta_B.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paleta_A.get(LedSpriteProperty.X) < 3) {
        paleta_A.change(LedSpriteProperty.X, 1)
        paleta_B.change(LedSpriteProperty.X, 1)
    }
})
let paleta_B: game.LedSprite = null
let paleta_A: game.LedSprite = null
for (let index = 0; index <= 2; index++) {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
paleta_A = game.createSprite(2, 4)
paleta_B = game.createSprite(3, 4)
let Pelota = game.createSprite(randint(0, 4), 0)
let direccion_y = 1
let direccion_x = randint(-1, 1)
basic.pause(500)
basic.forever(function () {
    Pelota.change(LedSpriteProperty.X, direccion_x)
    Pelota.change(LedSpriteProperty.Y, direccion_y)
    if (Pelota.isTouching(paleta_A) || Pelota.isTouching(paleta_B)) {
        Pelota.change(LedSpriteProperty.X, direccion_x * -1)
        Pelota.change(LedSpriteProperty.Y, -1)
        direccion_y = -1
        direccion_x = randint(-1, 1)
    } else {
        if (Pelota.get(LedSpriteProperty.X) <= 0) {
            direccion_y = 1
            direccion_x = randint(-1, 1)
        } else if (Pelota.get(LedSpriteProperty.Y) >= 4) {
            Pelota.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (Pelota.get(LedSpriteProperty.X) <= 0) {
            direccion_x = 1
        } else if (Pelota.get(LedSpriteProperty.X) >= 4) {
            direccion_x = -1
        }
        basic.pause(500)
    }
})
