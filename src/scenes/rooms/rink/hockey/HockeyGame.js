/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import HockeyPuck from "./HockeyPuck";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HockeyGame extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.netRight;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.netLeft;
        /** @type {HockeyPuck} */
        this.puck;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.points;
        /** @type {Array<Phaser.GameObjects.Rectangle|Phaser.GameObjects.Ellipse>} */
        this.hide;


        // bounds
        const bounds = scene.add.rectangle(-16, 29, 1316, 670);
        bounds.isFilled = true;
        bounds.fillColor = 16711680;
        bounds.fillAlpha = 0.5;
        this.add(bounds);

        // p12
        const p12 = scene.add.ellipse(289, -174, 18, 18);
        p12.isFilled = true;
        p12.fillColor = 65280;
        this.add(p12);

        // p11
        const p11 = scene.add.ellipse(-281, -175, 18, 18);
        p11.isFilled = true;
        p11.fillColor = 65280;
        this.add(p11);

        // p10
        const p10 = scene.add.ellipse(-459, -135, 18, 18);
        p10.isFilled = true;
        p10.fillColor = 65280;
        this.add(p10);

        // p9
        const p9 = scene.add.ellipse(-563, -29, 18, 18);
        p9.isFilled = true;
        p9.fillColor = 65280;
        this.add(p9);

        // p8
        const p8 = scene.add.ellipse(-577, 111, 18, 18);
        p8.isFilled = true;
        p8.fillColor = 65280;
        this.add(p8);

        // p7
        const p7 = scene.add.ellipse(-477, 199, 18, 18);
        p7.isFilled = true;
        p7.fillColor = 65280;
        this.add(p7);

        // p6
        const p6 = scene.add.ellipse(-335, 255, 18, 18);
        p6.isFilled = true;
        p6.fillColor = 65280;
        this.add(p6);

        // p5
        const p5 = scene.add.ellipse(357, 251, 18, 18);
        p5.isFilled = true;
        p5.fillColor = 65280;
        this.add(p5);

        // p4
        const p4 = scene.add.ellipse(483, 185, 18, 18);
        p4.isFilled = true;
        p4.fillColor = 65280;
        this.add(p4);

        // p3
        const p3 = scene.add.ellipse(555, 97, 18, 18);
        p3.isFilled = true;
        p3.fillColor = 65280;
        this.add(p3);

        // p2
        const p2 = scene.add.ellipse(533, -33, 18, 18);
        p2.isFilled = true;
        p2.fillColor = 65280;
        this.add(p2);

        // p1
        const p1 = scene.add.ellipse(445, -131, 18, 18);
        p1.isFilled = true;
        p1.fillColor = 65280;
        this.add(p1);

        // netRight
        const netRight = scene.add.rectangle(533, 15, 104, 84);
        netRight.isFilled = true;
        netRight.fillColor = 16711680;
        netRight.fillAlpha = 0.5;
        this.add(netRight);

        // netLeft
        const netLeft = scene.add.rectangle(-539, 15, 104, 84);
        netLeft.isFilled = true;
        netLeft.fillColor = 16711680;
        netLeft.fillAlpha = 0.5;
        this.add(netLeft);

        // puck
        const puck = new HockeyPuck(scene, 0, 0);
        this.add(puck);

        // lists
        const points = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
        const hide = [bounds, netLeft, netRight, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

        this.netRight = netRight;
        this.netLeft = netLeft;
        this.puck = puck;
        this.points = points;
        this.hide = hide;

        /* START-USER-CTR-CODE */

        // Current target pos
        this.target = { x: 0, y: 0 }

        // Only check puck hit when client is moving and hasn't already hit puck during current move
        this.doHitTest = false

        // Lines for wall collisions
        this.lines = this.createLines()

        // Line attached to puck used for calculating collision time
        this.puck.createLine()

        // Puck collision bounds
        this.netLeftBounds = netLeft.getBounds()
        this.netRightBounds = netRight.getBounds()
        this.bounds = bounds.getBounds()

        // Physics fixed timestep
        this.fixedTimestep = 1000 / 60
        this.accumulator = 0
        this.lastTime = Date.now()

        // Physics values
        this.friction = 0.05
        this.speedDiv = 12
        this.maxAngleFromHorizontal = 50
        this.maxVerticalFromNetCenter = 30

        // Timeout after 2500 fixed updates (~40 seconds) when puck isn't moving
        this.timeout = 2500
        this.defaultTimeout = this.timeout

        // Hides all children except puck
        this.hidePhysics()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get client() {
        return this.scene.client
    }

    addListeners() {
        this.network.events.on('get_puck', this.handleGetPuck, this)
        this.network.events.on('move_puck', this.handleMovePuck, this)

        this.scene.events.on('move_start', this.onMoveStart, this)
        this.scene.events.on('move_end', this.onMoveEnd, this)
    }

    removeListeners() {
        this.network.events.off('get_puck', this.handleGetPuck, this)
        this.network.events.off('move_puck', this.handleMovePuck, this)

        this.scene.events.off('move_start', this.onMoveStart, this)
        this.scene.events.off('move_end', this.onMoveEnd, this)
    }

    update() {
        const currentTime = Date.now()

        // Difference between this update and last update
        const frameTime = currentTime - this.lastTime

        this.lastTime = currentTime
        this.accumulator += frameTime

        // Do fixed update when fixed timestep is accumulated
        while (this.accumulator >= this.fixedTimestep) {
            this.fixedUpdate()

            this.accumulator -= this.fixedTimestep
        }
    }

    fixedUpdate() {
        if (this.doHitTest) {
            this.hitTest()
        }

        if (this.puck.isMoving) {
            this.updatePhysics()
        } else {
            this.updateTimeout()
        }
    }

    updatePhysics() {
        this.addFriction()
        this.addVelocity()
        this.collideWithNets()
        this.collideWithWalls()
    }

    updateTimeout() {
        if (this.puck.isInStartPos) {
            return
        }

        this.timeout -= 1

        if (this.timeout <= 0) {
            this.resetPuck()
            this.resetTimeout()
        }
    }

    onMoveStart(args) {
        // Offset target to hockey game space
        this.target.x = args.x - this.x
        this.target.y = args.y - this.y

        this.doHitTest = true
    }

    onMoveEnd() {
        this.doHitTest = false
    }

    handleGetPuck(args) {
        this.movePuck(args.x, args.y, 0, 0)
    }

    handleMovePuck(args) {
        this.movePuck(args.x, args.y, args.speedX, args.speedY)
    }

    sendGetPuck() {
        this.network.send('get_puck')
    }

    /**
     * Creates lines used for wall collisions, drawn between points in scene.points.
     */
    createLines() {
        const lines = []

        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i]
            const next = this.points[(i + 1) % this.points.length]

            const line = new Phaser.GameObjects.Line(this.scene, 0, 0, point.x, point.y, next.x, next.y)

            line.setOrigin(0, 0)
            lines.push(line)

            this.add(line)

            // Used for bouncing puck off wall
            line.normalVector = new Phaser.Math.Vector2()
            Phaser.Geom.Line.GetNormal(line.geom, line.normalVector)
        }

        return lines
    }

    hitTest() {
        if (!this.puck.bounds.contains(this.client.penguin.x, this.client.penguin.y)) {
            return
        }

        const puckX = Math.round(this.puck.x)
        const puckY = Math.round(this.puck.y)

        const distance = Phaser.Math.Distance.Between(this.target.x, this.target.y, puckX, puckY)
        if (distance < 40) {
            return
        }

        const speedX = Math.floor((this.target.x - puckX) / this.speedDiv)
        const speedY = Math.floor((this.target.y - puckY) / this.speedDiv)

        this.scene.network.send('move_puck', { x: puckX, y: puckY, speedX: speedX, speedY: speedY })

        this.movePuck(puckX, puckY, speedX, speedY)
        this.doHitTest = false
    }

    movePuck(puckX, puckY, speedX, speedY) {
        this.resetTimeout()

        this.puck.isMoving = true

        this.puck.setPosition(puckX, puckY)
        this.puck.setVelocity(speedX, speedY)
    }

    addFriction() {
        const length = Math.max(this.puck.velocity.length() - this.friction, 0)

        if (length === 0) {
            this.puck.isMoving = false
        }

        this.puck.velocity.setLength(length)
    }

    addVelocity() {
        this.puck.x += this.puck.velocity.x
        this.puck.y += this.puck.velocity.y
    }

    collideWithNets() {
        let collision = false

        if (this.boundsContainsPuck(this.netLeftBounds)) {
            collision = this.checkLeftNet()

        } else if (this.boundsContainsPuck(this.netRightBounds)) {
            collision = this.checkRightNet()
        }

        if (collision) {
            // Bounce off net
            this.puck.velocity.negate()

            for (let i = 0; i < 2; i++) {
                this.addVelocity()
            }

            this.puck.velocity.scale(0.8)
        }
    }

    checkLeftNet() {
        const diffY = this.puck.y - this.netLeft.y

        if (!this.checkNetDiffY(diffY)) {
            return true
        }

        let angle = Phaser.Math.RadToDeg(Math.atan2(this.puck.velocity.y, this.puck.velocity.x))

        if (angle < 0) {
            angle += 360
        }
        angle -= 180

        if (angle > -this.maxAngleFromHorizontal && angle < this.maxAngleFromHorizontal) {
            // Left net scored
            this.resetPuck()
            return false
        }

        return true
    }

    checkRightNet() {
        const diffY = this.puck.y - this.netRight.y

        if (!this.checkNetDiffY(diffY)) {
            return true
        }

        let angle = Phaser.Math.RadToDeg(Math.atan2(this.puck.velocity.y, this.puck.velocity.x))

        if (angle > -this.maxAngleFromHorizontal && angle < this.maxAngleFromHorizontal) {
            // Right net scored
            this.resetPuck()
            return false
        }

        return true
    }

    checkNetDiffY(diffY) {
        return diffY > -this.maxVerticalFromNetCenter && diffY < this.maxVerticalFromNetCenter
    }

    collideWithWalls() {
        // Update puck collision line
        Phaser.Geom.Line.SetToAngle(this.puck.line.geom, this.puck.x, this.puck.y, this.puck.velocity.angle(), 100)

        for (const line of this.lines) {
            const collisionTime = this.getLineCollisionTime(line)

            if (collisionTime === Infinity) {
                continue
            }

            if (collisionTime <= 2) {
                // Bounce off wall
                this.puck.velocity.reflect(line.normalVector)
                this.puck.velocity.scale(0.8)
                this.addVelocity()
            }
        }

        if (!this.boundsContainsPuck(this.bounds)) {
            this.resetPuck()
        }
    }

    getLineCollisionTime(line) {
        // Get intersection between puck line and wall line, and store puck intersecting point
        const intersect = Phaser.Geom.Intersects.LineToLine(this.puck.line.geom, line.geom, this.puck.intersectingPoint)

        if (intersect) {
            const distance = Phaser.Math.Distance.BetweenPoints(this.puck, this.puck.intersectingPoint)

            return distance / this.puck.velocity.length()
        }
    }

    boundsContainsPuck(bounds) {
        // Use puck world pos because bounds use world space
        return bounds.contains(this.puck.worldX, this.puck.worldY)
    }

    resetPuck() {
        this.puck.reset()
    }

    resetTimeout() {
        this.timeout = this.defaultTimeout
    }

    hidePhysics() {
        this.iterate(child => child.visible = child === this.puck)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
