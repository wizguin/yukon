import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'


export default class SnowballFactory {

    constructor(world) {
        this.world = world

        this.balls = []
        this.speed = 15
        this.startHeight = -12
        this.maxHeight = 425
        this.minHeight = 350

        world.events.on('snowballcomplete', (x, y) => world.room.onSnowballComplete(x, y))
    }

    throwBall(id, x, y) {
        let penguin = this.world.room.penguins[id]
        if (!penguin || penguin.isTweening) return

        if (this.balls.length > 10) this.removeOldestBall()

        let ball = this.createBall(penguin)
        x += Phaser.Math.Between(-20, 20)
        y += Phaser.Math.Between(-20, 20)

        this.playAnimation(penguin, x, y)

        this.world.room.time.addEvent({
            delay: 833,
            callback: () => this.addTween(ball, x, y)
        })
    }

    removeOldestBall() {
        let oldest = this.balls.shift()

        if (oldest.tween) oldest.tween.stop()
        oldest.shadow.destroy()
        oldest.destroy()
    }

    createBall(penguin) {
        let ball = this.world.room.add.image(penguin.x, penguin.y + this.startHeight, 'main', 'snowball/ball')
        ball.shadow = this.world.room.add.image(penguin.x, penguin.y, 'main', 'snowball/shadow')

        ball.visible = false
        ball.shadow.visible = false

        this.balls.push(ball)
        return ball
    }

    playAnimation(penguin, x, y) {
        let angle = PathEngine.getAngle({ x: penguin.x, y: penguin.y }, { x: x, y: y })
        let direction = Math.max(Math.round(PathEngine.getDirection(angle) / 2), 1)
        let frame = direction + 26 // + 26 for throwing frame id

        penguin.playFrame(frame, false)
    }

    addTween(ball, x, y) {
        let distance = Phaser.Math.Distance.Between(ball.x, ball.y, x, y)
        let duration = PathEngine.getFrameBasedDuration(distance, this.speed * 2)

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
            y: y,

            onStart: () => this.onTweenStart(ball),
            onUpdate: () => this.onTweenUpdate(ball, curve),
            onComplete: () => this.onTweenComplete(ball, curve)
        })
    }

    onTweenStart(ball) {
        ball.visible = true
        ball.shadow.visible = true
    }

    onTweenUpdate(ball, curve) {
        let position = curve.getPoint(ball.tween.totalProgress)

        ball.x = position.x
        ball.y = position.y
        ball.shadow.x = position.x

        ball.depth = ball.shadow.y + 1
        ball.shadow.depth = ball.shadow.y
    }

    onTweenComplete(ball, curve) {
        this.onTweenUpdate(ball, curve)

        if (ball.active) {
            ball.setTexture('main', 'snowball/ground')
            this.world.events.emit('snowballcomplete', ball.x, ball.y)
        }
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

    clearBalls() {
        this.balls = []
    }

}
