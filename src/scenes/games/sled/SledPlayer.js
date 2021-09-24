import BaseContainer from '@scenes/base/BaseContainer'


/* START OF COMPILED CODE */

class SledPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // shadow
        const shadow = scene.add.image(-2.799923880965366, -13.713563346765511, "sled", "player/shadow");
        this.add(shadow);

        // art
        const art = scene.add.container(-2.799923880965366, -13.713563346765511);
        this.add(art);

        // sled
        const sled = scene.add.sprite(0, 0, "sled", "player/tube/1/sled");
        sled.visible = false;
        art.add(sled);

        // body
        const body = scene.add.sprite(0, 0, "sled", "player/tube/1/body");
        art.add(body);

        // penguin
        const penguin = scene.add.sprite(0, 0, "sled", "player/tube/1/penguin");
        art.add(penguin);

        // username
        const username = scene.add.text(3, -50, "", {});
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
        this.currentX = 0

        this.id
        this.isClient = false

        this.sledType
        this.isTube = false

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
        this.height = 0
        this.jumpDropOff = 0

        this.targetDelta = 1000 / 60

        this.gravity = 2 / this.targetDelta
        this.jumpGravity = 1 / this.targetDelta

        this.decay = 0.98
        this.crashDecay = 0.96
        this.finishDecay = 0.75

        this.shadowDefaultY = this.shadow.y

        this.map

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get isWaiting() {
        return this.scene.isWaiting
    }

    get myMap() {
        return this.scene.myMap
    }

    get mapX() {
        return Math.round(this.fixedX / 40)
    }

    get mapY() {
        // Math.min prevents mapY becoming too large if player is returning from lost focus
        return Math.min(Math.round(this.fixedY / 40), this.myMap.length - 1)
    }

    get percentComplete() {
        return this.mapY / this.myMap.length
    }

    get delta() {
        return this.scene.delta
    }

    setSled(username, hand, color) {
        switch (hand) {
            case 5021:
                this.sledType = 'toboggan'
                break
            case 5046:
                this.sledType = 'green'
                break
            case 5047:
                this.sledType = 'pink'
                break
            default:
                this.sledType = 'tube'
                this.isTube = true
                this.sled.visible = true
                break
        }

        // Update sled immediately
        this.setFrame(1)

        this.username.text = username
        this.body.tint = this.scene.getColor(color)
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
            this.speed = Math.min(this.speed + (this.gravity * this.delta), this.maxSpeed)

        } else if (this.speed > this.maxSpeed) {
            this.speed = Math.max(this.speed * this.getDecay(this.decay), this.maxSpeed)

        } else {
            this.speed = this.maxSpeed
        }
    }

    getDecay(decay) {
        let modifier = this.targetDelta / decay
        return Math.pow(decay, this.delta / modifier)
    }

    updateFinishDecay() {
        this.speed = this.speed * this.getDecay(this.finishDecay)

        if (this.speed < 1) {
            this.isStopped = true

            this.sendGameOver()
        }
    }

    updateCrashDecay() {
        this.speed = this.speed * this.getDecay(this.crashDecay)

        if (this.speed < 1) {
            this.endCrash()
        }
    }

    updatePosition() {
        let move = (this.delta / 20) * this.speed

        this.fixedY = Math.round(this.fixedY + move)

        let map = this.myMap[this.mapY][this.mapX]

        // Values less than 0 are less to reduce bouncing
        this.map = (map < 0) ? map * 10 : map * 20
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
        if (this.height > map) {
            this.startJump()
        } else {
            this.endJump()
        }
    }

    startCrash() {
        this.speed = this.maxSpeed
        this.isCrashed = true

        this.playCrash()
    }

    endCrash() {
        this.speed = 0
        this.isCrashed = false
        this.setFrame(1)

        // Hide animating sled sprite after crash on toboggan type sleds
        if (!this.isTube) {
            this.sled.visible = false
        }
    }

    startJump() {
        this.isJumping = true
        this.jumpDropOff += this.jumpGravity * this.delta
        this.height -= this.jumpDropOff
    }

    endJump() {
        this.isJumping = false
        this.jumpDropOff = 0
        this.height = this.map
    }

    move() {
        if (!this.isWaiting && !this.isCrashed) {
            this.updateFrame()
        }

        this.lastX = this.fixedX

        this.x = this.fixedY + this.fixedX
        this.y = (this.fixedY * 0.6) - (this.fixedX * 0.6) - this.height

        // Fix shadow position to player on crash
        this.shadow.y = (this.isCrashed) ? this.shadowDefaultY : this.height

        this.depth = (this.mapX * 10) + 1 + 1000

        this.icon.x = this.percentComplete * this.scene.bar.width
    }

    updateFrame() {
        if (this.fixedX < this.lastX) {
            this.playLeft()

        } else if (this.fixedX > this.lastX) {
            this.playRight()

        } else if (this.isJumping) {
            this.setFrame(4)

        } else {
            this.setFrame(1)
        }
    }

    // Updating art sprites

    setFrame(frame) {
        if (this.isTube) {
            this.sled.setFrame(`player/tube/${frame}/sled`)
        }

        this.body.setFrame(`player/${this.sledType}/${frame}/body`)
        this.penguin.setFrame(`player/${this.sledType}/${frame}/penguin`)
    }

    playLeft() {
        if (this.isTube) {
            return this.setFrame(3)
        }

        this.body.anims.play(`${this.sledType}_left_body`)
        this.penguin.anims.play(`${this.sledType}_left_penguin`)
    }

    playRight() {
        if (this.isTube) {
            return this.setFrame(2)
        }

        this.body.anims.play(`${this.sledType}_right_body`)
        this.penguin.anims.play(`${this.sledType}_right_penguin`)
    }

    playCrash() {
        this.body.anims.play(`${this.sledType}_crash_body`)
        this.penguin.anims.play(`${this.sledType}_crash_penguin`)

        // Set sled visible for toboggan type sleds
        this.sled.visible = true
        this.sled.anims.play(`${this.sledType}_crash_sled`)
    }

    // Client input

    moveUp() {
        if (!this.isCrashed && !this.isFinished) {
            this.fixedX = Math.min(this.fixedX + this.turnSpeed, 360)
            this.sendMove()
        }
    }

    moveDown() {
        if (!this.isCrashed && !this.isFinished) {
            this.fixedX = Math.max(this.fixedX - this.turnSpeed, 0)
            this.sendMove()
        }
    }

    sendMove() {
        if (this.isClient && this.fixedX != this.currentX) {
            this.currentX = this.fixedX

            this.network.send('send_move', { id: this.id, x: this.fixedX, y: this.fixedY, time: this.scene.gameTime })
        }
    }

    sendGameOver() {
        if (this.isClient) {
            this.network.send('game_over', { score: this.scene.finishPos })
        }

        this.scene.finishPos++
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SledPlayer
