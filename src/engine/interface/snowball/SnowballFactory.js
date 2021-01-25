export default class SnowballFactory {

    constructor(world) {
        this.world = world

        this.balls = []
        this.speed = 875
        this.maxHeight = 450
        this.minHeight = 300
    }

    throwBall(id, x, y) {
        if (this.balls.length > 9) this.removeOldestBall()

        let penguin = this.world.room.penguins[id]
        if (!penguin) return

        let ball = this.createBall(penguin)
        x = Math.round(x + Math.random() * 41)
        y = Math.round(y + Math.random() * 41)

        this.addTween(ball, x, y)
    }

    removeOldestBall() {
        let oldest = this.balls.shift()

        if (oldest.tween) oldest.tween.remove()
        if (oldest.shadow.tween) oldest.shadow.tween.remove()
        if (oldest.shadow) oldest.shadow.destroy()

        oldest.destroy()
    }

    createBall(penguin) {
        let ball = this.world.room.add.image(penguin.x, penguin.y - 12, 'main', 'snowball/ball')
        ball.shadow = this.world.room.add.image(penguin.x, penguin.y - 12, 'main', 'snowball/shadow')

        this.balls.push(ball)
        return ball
    }

    addTween(ball, x, y) {
        let distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y)
        let duration = (distance / this.speed) * 1000

        let peak = this.getPeak(duration)
        let control = this.getMidPoint([ball.x, ball.y], [x, y])

        let curve = new Phaser.Curves.QuadraticBezier([
            ball.x, ball.y,
            control.x, control.y - peak,
            x, y
        ])

        ball.tween = this.world.room.tweens.add({
            targets: ball.shadow,
            duration: duration,
            //delay: 200,

            x: x,
            y: y,

            onUpdate: () => this.onTweenUpdate(ball, curve),
            onComplete: () => this.onTweenComplete(ball)
        })
    }

    onTweenUpdate(ball, curve) {
        let position = curve.getPoint(ball.tween.totalProgress)

        ball.x = position.x
        ball.y = position.y

        ball.shadow.depth = ball.shadow.y
        ball.depth = ball.shadow.depth
    }

    onTweenComplete(ball) {
        ball.setTexture('main', 'snowball/ground')
        ball.shadow.destroy()
    }

    getPeak(duration) {
        let peak = Math.max(duration / 2, this.minHeight)
        return Math.min(peak, this.maxHeight)
    }

    getMidPoint([x1, y1], [x2, y2]) {
        return {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2
        }
    }

}
