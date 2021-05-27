sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    music.zapped.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff5555555555555555555555555555555555555555555ff999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f555555555555555555555555555555555555555555555f999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff5555555555555555555555555555555555555555555ff999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555555555555555555555555555555555f9999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555555555555555555555555555555555f9999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff55555555555555555555555555555555555555555ff9999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f55555555555555555555555555555555555555555f99999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff555555555555555555555555555555555555555ff99999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff5555555555555555555555555555555555555ff999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f5555555555555555555555555555555555555f9999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff55555555555555555555555555555555555ff9999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff555555555555555555555555555555555ff99999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff5555555555555555555555555555555ff999999999999999999999999999
    999999999999999999999999999999fffffffff999999999999999999999999999999999999999999999999999999999999ff55555555555555555555555555555ff9999999999999999999999999999
    99999999999999999ffffff9fffffff7777777fff99999999999999999999999999999999999999999999999999999999999fff5555555555555555555555555fff99999999999999999999999999999
    999999999999999fff7777f9f777777777777777f9999999999999999999999999999999999999999999999999999999999999ff55555555555555555555555ff9999999999999999999999999999999
    999999999999ffff777777fff777777777777777ff9999999999999999999999999999999999999999999999999999999999999fff5555555555555555555fff99999999999999999999999999999999
    9999999999fff7777777777777777777777777777ff99999999999999999999999999999999999999999999999999999999999999ffff5555555555555ffff9999999999999999999999999999999999
    999999999ff7777777777777777777777777777777ff9999999999999999999999999999999999999999999999999999999999999999fffffffffffffff9999999999999999999999999999999999999
    999999999f777777777777777777777777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f777777777777777777777777777777777ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f77777777777777ffffff77777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999f77777777777777fddddf77777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff9999999999
    999999999f77777777777777fddddf77777777777777f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff7777777ff999999999
    999999999f7777777777fffffddfdf77777777777777f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff77777777777ffff999999
    999999999f7777777777fddfdddddf77777777777777f9999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff777777777777777f999999
    999999999f7777777777fddddddddf77777777777777f999999999999999999999999999999999999999fffff99999999999999999999999999999999999999f7777777777777777777777777ff99999
    999999999f7777777777fddddddddf77777777777777f999999999999999999999fffffffffffffffffff777f99999999999999999999999999999999999999f77777777777777777777777777fff999
    999999999f7777777777fddddddddf77777777777777f999999999999999999999f77777777777777777777ff99999999999999999999999999999999999999f7777777777777777777777777777ff99
    999999999f7777777777fffddddddf77777777777777f999999999999999999999f777777777777777777777fff999999999999999999999999999999999999f77777777777777777777777777777ff9
    999999999f777777777777ffffffff77777777777777f999999999999999999999f77777777777777777777777ff99999999999999999999999999999999999f777777777777777777777777777777ff
    99999999ff777777777777777777777777777777777ff999999999999999999999f777777777777777777777777f99999999999999999999999999999999999f7777777777777fffffff7777777777ff
    99999999f7777777777777777777777777777777777fff99999999999999999999f777777777777777777777777f99999999999999999999999999999999999f7777777777777f44444ff7777777777f
    99999999f7777777777777777777777777777777777777f9999999999999999999f777777777777777777777777f99999999999999999999999999999999999f7777777777777f4444f4f77777777777
    9999999ff7777777777777777777777777777777777777fff99999999999999999ff77777777777777777777777fff999999999999999999999999999999999ff777777777777f444444f77777777777
    9999999f7777777777777777777777777777777777777777ff99999999999999999f777777ffffff7777777777777ff999999999999999999999999999999999f77777777fffff444444f77777777777
    9999999f77777777777777777777777777777777777777777ff9999999999999999f777777faaaaf77777777777777fff9999999999999999999999999999999f77777777f4444444444f77777777777
    9999999f777777777777777777777777777777777777777777f9999999999999999f777777faafaf7777777777777777ff999999999999999999999999999999f77777777f4444444444f77777777777
    9999999f777777777777777777777777777777777777777777f9999999999999999f777ffffaaaaf77777777777777777ff99999999999999999999999999999f77777777f4444444444f77777777777
    9999999f777777777777777777777777777777777777777777f9999999999999999f777faaaaaaaf777777777777777777fff999999999999999999999999999f77777777ffffffffffff77777777777
    9999999f777777fffff7777777777777777777777777777777f9999999999999999ff77faaaaaaaf77777777777777777777f999999999999999999999999999f7777777777777777777777777777777
    9999999f77777ff666f7777777777777777777777777777777f99999999999999999f77faaaaaaaf77777777777777777777f999999999999999999999999999f7777777777777777777777777777777
    9999999f77777f6f66f7777777777777777777777777777777f99999999999999999f77faaaaaaaf77777777777777777777f999999999999999999999999999f7777777777777777777777777777777
    9999999f77777f6666ffff7777777777777777777777777777f99999999999999999f77fffffffff77777777777777777777f999999999999999999999999999f7777777777777777777777777777777
    9999999f77777f6666666f7777777777777777777777777777f99999999999999999f7777777777777777777777777777777f99999999999999999999999999fff777777777777777777777777777777
    9999999fff777f6666666f7777777777777777777777777777f9999999999999fffff7777777777777777777777777777777f999999999999999999999999fff77777777777777777777777777777777
    999999999ff77f6666666f777777777777777777777777777ff999999999999ff77777777777777777777777777777777777f99999999999999999999999ff7777777777777777777777777777777777
    9999999999ffff6666666ff77777777777777777777777ffff9999999999999f777777777777777777777777777777777777f99999999999999999999999f777777fffffff7777777777777777777777
    9999999999999ffffffffff777777777777777ffffffff99999999999999999f777777777777777777777777777777777777f99999999999999999999999f777777faaaaaf7777777777777777777777
    9999999999999999999999fff7777777777777f999999999999999999999999f77777777777777777777777777777777777ff99999999999999999999999f777777faaaaaf7777777777777777777777
    9999999999999999999999fef7777777777777f999999999999999999999999f777777777777777777777777777777777fff999999999999999999999999f777777ffaaaaf7777777777777777777777
    9999999999999999999999fefffffffffffffff999999999999999999999999f777777777777777777777777777777777f99999999999999999999999999f777777faaaaaf7777777777777777777777
    9999999999999999999999feeeeeef999999999999999999999999999999999f777777777777777777777fffffff77777f99999999999999999999999999f777777faaaaaffffff77777777777777777
    9999999999999999999999feeeeeef99fffffffffffffff9999999999999999f777777777777777777777f33333f77777f999fffffffffffffff99999999f777777faaaaaaaaaaf7777777ffffffffff
    9999999999999999fffffffeeeeeefff777777777777777ff99999999999999ff77777777777777777777f33333f77777f9ff77777777777777ff9999999ff77777faaaaaaaaaaf7777ffff999999999
    999999999999999f777777feeeeeef7777777777777777777ffffff999999999f77777777777777777777f3f333f7777ffff7777777777777777ffff99999f77777faaaaaaaaaaf77fff999999999999
    9999999999999ff7777777ffeeeeef777777777777777777777777fffff99999f77777777777777777777f33333f7777f7777777777777777777777fffffff77777faaaaaaaaaaffffeffff999999999
    99999999999ff7777777777ffffeef777777777777777777777777777f1fffffff7777777777777777777f33333ffffff7777777777777777777777777777f77777fffffffffffffeeef77ffffff9999
    99999999fff777777777777ff1feef77777777777777777777777777f11111111f7777777777777777777f3333333333fff77777777777777777777777777ff77777777777ffffeeeeef7777777fffff
    999999ff777777777777777ff1feef77777777777777777777777777f11111111f7777777777777777777f33333333333ff777777777777777777777777777ff77777777fff77feeeeef777777777777
    9999ff77777777777777777ff1feef77777777777777777777777777f11111111f7777777777777777777f33333333333ff7777777777777777777777777777ffffffffff7777feeeeef777777777777
    99ff7777777777777777777ffffeef77777777777777777777777777f111111111f777777777777777777f33333333333fff77777777777777777777777777777777777777777feeeeef777777777777
    9f777777777777777777777feeeeef7777777777777777777777777f1111111111f777777777777ff7777fffffffffffff7f77777777777777777777777777777777777777777feeeeef777777777777
    f7777777777777777777777feeeeef7777777777777777777777777f1111111111ff77777777777fff77777777777777777f77777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777777777feeeeef777777777777777777777777f1111111111f7f7777777777ff7f77777777777777777f77777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777777777feeeeef77777777777777777777777f11111111111f7ff777777777f77f77777777777777777f77777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777777777feeeeef77777777777777777777777f11111111111f77fffff77777f77ff7777777777777777f77777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777777777feeeeef7777777777777777777777f11111111111f7777777fffffff777ff777777777777777f77777777777777777777777777777777777777777fefffff777777777777
    77777777777777777777777feeeeef777777777777777777777f11111111111f7777777777777777777ffff777777777777f77777777777777777777777777777777777777777ff1111f777777777777
    77777777777777777777777feeeeef77777777777777777777f11111111111f77777777777777777777feefffffffffff77f77777777777777777777777777777777777777777ff1111f777777777777
    77777777777777777777777feeeeef77777777777777777fff11111111111f777777777777777777777feeeeeef77777ffff77777777777777777777777777777777777777777fff111f777777777777
    77777777777777777777777feeeeef777777777777777ff1111111111111ff777777777777777777777feeeeeef77777777777777777777777777777777777777777777777777feeffff777777777777
    77777777777777777777777feeeeef77777777777ffff11111111111111f77777777777777777777777feeeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777777777feeeeeffffffffffff111111111111111111f77777777777777777777777ffeeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    777777777777777777777fffeeeeef111111111111111111111111111ff7777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    7777777777777777777ff11feeeeef11111111111111111111111111f777777777777777777777777777fefffef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777777777777ff1111feeeeef1111111111111111111111111f7777777777777777777777777777ff11fef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777777777fff111111feeeeef111111111111111111111111f77777777777777777777777777777ff11fef77777777777777777777777777777777777777777777777777feeeeef777777777777
    7777777777777f111111111feeeeeff11111111111111111111fff777777777777777777777777777777fff1fef77777777777777777777777777777777777777777777777777feeeeef777777777777
    777777777777f1111111111feeeeeef1111111111111111ffff777777777777777777777777777777777fefffef77777777777777777777777777777777777777777777777777feeeeef777777777777
    7777777777ff11111111111feeeeeef11111111111111ff7777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    777777777f1111111111111feeeeeef111111111111ff777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777f11111111111111feeeeeef1111111fffff77777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777f11111111111111ffeeeeef1111fff7777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777f111111111111111feeeeefffff7777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77777777f1111111111111fffeeeeef77777777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    77fffffffffffffffff111f7feeeeef77777777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    fff777777777777777fffffffffffef77777777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    7777777777777777777777777777ffff7777777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777777777
    777777777777777777777777777777fffff7777777777777777777777777777777777777777777777777feeeeef77777777777777777777777777777777777777777777777777feeeeef777777ffffff
    7777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let mySprite = sprites.create(img`
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 d d d d d 5 . . . . . 
    . . . . . d 9 d 9 d . . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . . d d 2 d d . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . d b b b b b d . . . . . 
    . . . . d b 4 b 4 b d . . . . . 
    . . . . d b b b b b d . . . . . 
    . . . . d b 4 4 4 b d . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    projectile = sprites.createProjectileFromSide(img`
        .........ccc........
        ......cccc3cc.......
        .....cc3c3c3c.......
        .....c33ccbcc.......
        .....cb3cb3b3c......
        .....ccccccc3c......
        .....c33bbc33c......
        .....cc333cccc......
        ......ccccc7..6.....
        ...........7666.....
        .......5..766.......
        .......7776.........
        ........76..........
        ........6...........
        ........6...........
        ........6...........
        ........66..........
        .........6..........
        ....................
        ....................
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        ....................
        ...ff...............
        ..fffffff...........
        ..f11f11ff..........
        ..ff1f111ff.........
        ...f1f1111f.........
        ....ffffffffffff....
        ...fff55f55f55ffff..
        ...f5f55f55f55f55ff.
        ...f5f55f55f55f5f5f.
        ...f5f55f55f55f55ff.
        ...fff55f55f55f55f..
        ....fffff55f55f5ff..
        .......ffffffffff...
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
