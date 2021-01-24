export default class SnowballFactory {

    constructor(world) {
        this.world = world

        this.balls = []
    }

    throwBall(id, x, y) {
        if (this.balls.length > 9) this.removeOldestBall()

        let penguin = this.world.room.penguins[id]
        if (!penguin) return

        let ball = this.world.room.add.image(penguin.x, penguin.y, 'main', 'snowball')
        this.balls.push(ball)

        ball.tween = this.world.room.tweens.add({
            targets: ball,
            x: Math.round(x),
            y: Math.round(y),
            duration: 500,
            ease: 'Linear',
            onComplete: () => ball.setTexture('main', 'snowball-ground')
        })
    }

    removeOldestBall() {
        let oldest = this.balls.shift()

        oldest.tween.remove()
        oldest.destroy()
    }

}
