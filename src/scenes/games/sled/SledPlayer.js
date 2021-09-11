/* START OF COMPILED CODE */

class SledPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // shadow
        const shadow = scene.add.image(0, 0, "sled", "player/shadow");
        this.add(shadow);

        // art
        const art = scene.add.container(-3, -61);
        this.add(art);

        // sled
        const sled = scene.add.sprite(3.26910400390625, 60.5771484375, "sled", "player/1/1/sled");
        art.add(sled);

        // body
        const body = scene.add.sprite(0, 49, "sled", "player/1/1/body");
        body.setOrigin(0.5, 0.5070422535211268);
        body.tintFill = true;
        body.tintTopLeft = 3355443;
        body.tintTopRight = 3355443;
        body.tintBottomLeft = 3355443;
        body.tintBottomRight = 3355443;
        art.add(body);

        // penguin
        const penguin = scene.add.sprite(0, 49, "sled", "player/1/1/penguin");
        art.add(penguin);

        // username
        const username = scene.add.text(3, 0, "", {});
        username.setOrigin(0.5, 1);
        username.text = "Username";
        username.setStyle({"align":"center","color":"#000000ff","fixedWidth":200,"fontFamily":"Arial","fontSize":"24px"});
        art.add(username);

        this.shadow = shadow;
        this.art = art;
        this.sled = sled;
        this.body = body;
        this.penguin = penguin;
        this.username = username;

        /** @type {number} */
        this.fixedX = 0;

        /* START-USER-CTR-CODE */

        this.fixedY = 0

        this.scene = scene

        this.speed = 0
        this.turnSpeed = 40
        this.boostSpeed = 60
        this.maxSpeed = 20

        this.isJumping = false
        this.isCrashed = false
        this.isFinished = false
        this.isStopped = false

        this.lastX = 0
        this.h = 0
        this.m = 0

        this.gravity = 2
        this.decay = 0.98
        this.crashDecay = 0.96
        this.finishDecay = 0.75

        this.map

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get isWaiting() {
        return this.scene.isWaiting
    }

    get currentTime() {
        return this.scene.currentTime
    }

    get lastTime() {
        return this.scene.lastTime
    }

    get myMap() {
        return this.scene.myMap
    }

    get mapX() {
        return Math.round(this.fixedX / 40)
    }

    get mapY() {
        return Math.round(this.fixedY / 40)
    }

    get percentComplete() {
        return this.mapY / this.myMap.length
    }

    moveUp() {
        if (!this.isCrashed) {
            this.fixedX = Math.min(this.fixedX + this.turnSpeed, 360)
        }
    }

    moveDown() {
        if (!this.isCrashed) {
            this.fixedX = Math.max(this.fixedX - this.turnSpeed, 0)
        }
    }

    update() {
        if (!this.isWaiting && !this.isStopped) {
            this.updateSpeed()
            this.updatePosition()
            this.checkMap()
            this.move()
        }
    }

    updateSpeed() {
        if (this.isFinished) {
            this.updateFinishDecay()

        } else if (this.isCrashed) {
            this.updateCrashDecay()

        } else if (this.speed < this.maxSpeed) {
            this.speed = Math.min(this.speed + this.gravity, this.maxSpeed)

        } else if (this.speed > this.maxSpeed) {
            this.speed = Math.max(this.speed * this.decay, this.maxSpeed)

        } else {
            this.speed = this.maxSpeed
        }
    }

    updateFinishDecay() {
        this.speed = this.speed * this.finishDecay

        if (this.speed < 1) {
            this.isStopped = true
        }
    }

    updateCrashDecay() {
        this.speed = this.speed * this.crashDecay

        if (this.speed < 1) {
            this.endCrash()
        }
    }

    updatePosition() {
        let move = ((this.currentTime - this.lastTime) / 20) * this.speed
        this.fixedY = Math.round(this.fixedY + move)

        this.map = this.myMap[this.mapY][this.mapX] * 20
    }

    checkMap() {
        let map = this.map

        if (map <= 180) {
            return this.checkJump(map)
        }

        if (map == 200) {
            this.isFinished = true

        } else if (map == 220 && !this.isCrashed) {
            this.startCrash()

        } else if (map == 240) {
            this.speed = this.boostSpeed
        }
    }

    checkJump(map) {
        if (this.h > map) {
            this.startJump()
        } else {
            this.endJump()
        }
    }

    startCrash() {
        this.speed = this.maxSpeed
        this.isCrashed = true

        this.sled.anims.play('crash_sled_1')
        this.body.anims.play('crash_body')
        this.penguin.anims.play('crash_penguin')
    }

    endCrash() {
        this.speed = 0
        this.isCrashed = false
        this.gotoAndStop(1)
    }

    startJump() {
        this.isJumping = true
        this.m += this.gravity
        this.h -= this.m
    }

    endJump() {
        this.isJumping = false
        this.m = 0
        this.h = this.map
    }

    move() {
        if (!this.isWaiting && !this.isCrashed) {
            this.updateFrame()
        }

        this.lastX = this.fixedX

        this.x = this.fixedY + this.fixedX
        this.y = (this.fixedY * 0.6) - (this.fixedX * 0.6) - this.h

        this.shadow.y = (this.isCrashed) ? this.y : this.h

        this.depth = (this.mapX * 10) + 1 + 1000

        this.icon.x = this.percentComplete * this.scene.bar.width
    }

    updateFrame() {
        if (this.fixedX < this.lastX) {
            this.gotoAndStop(3)

        } else if (this.fixedX > this.lastX) {
            this.gotoAndStop(2)

        } else if (this.isJumping) {
            this.gotoAndStop(4)

        } else {
            this.gotoAndStop(1)
        }
    }

    gotoAndStop(frame) {
        this.sled.setFrame(`player/1/${frame}/sled`)
        this.body.setFrame(`player/1/${frame}/body`)
        this.penguin.setFrame(`player/1/${frame}/penguin`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SledPlayer
