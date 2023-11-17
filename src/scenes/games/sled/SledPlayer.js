/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SledPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguin;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Container} */
        this.character;


        // shadow
        const shadow = scene.add.image(0, 0, "sled", "player/shadow");
        this.add(shadow);

        // character
        const character = scene.add.container(0, 0);
        this.add(character);

        // sled
        const sled = scene.add.sprite(0, 0, "sled", "player/tube/1/sled");
        sled.visible = false;
        character.add(sled);

        // body
        const body = scene.add.sprite(0, 0, "sled", "player/tube/1/body");
        character.add(body);

        // penguin
        const penguin = scene.add.sprite(0, 0, "sled", "player/tube/1/penguin");
        character.add(penguin);

        // username
        const username = scene.add.text(0, -91, "", {});
        username.setOrigin(0.5, 0);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "24px" });
        character.add(username);

        this.shadow = shadow;
        this.sled = sled;
        this.body = body;
        this.penguin = penguin;
        this.username = username;
        this.character = character;

        /* START-USER-CTR-CODE */

        this.id = null

        // Filtering
        this.isPlayer = true

        // Progress bar icon
        this.icon = scene.add.image(0, 0, 'sled', 'progress/icon_1')

        // Player position in game, real position calculated from this
        this.gameX = 0
        this.gameY = 0

        // First player starts at gameX 320
        this.startGameX = 320

        // Last move
        this.lastGameX = 0

        this.sledType = 'tube'

        // Speed
        this.speed = 0
        this.turnSpeed = 40
        this.boostSpeed = 48
        this.maxSpeed = 16

        // State
        this.isJumping = false
        this.isCrashed = false
        this.isFinished = false
        this.isStopped = false

        // Height
        this.height = 0

        // Physics values
        this.gravity = 2
        this.jumpGravity = 1
        this.jumpDropOff = 0

        this.friction = 0.98
        this.crashFriction = 0.96
        this.finishFriction = 0.89

        // Stores current tile position data (hillMap[mapY][mapX])
        // Used for detecting map obstacles
        this.map = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get started() {
        return this.scene.started
    }

    get isTube() {
        return this.sledType === 'tube'
    }

    get hillMap() {
        return this.scene.hillMap
    }

    get mapX() {
        return Math.round(this.gameX / 40)
    }

    get mapY() {
        // Cap at hillMap length
        return Math.min(Math.round(this.gameY / 40), this.hillMap.length - 1)
    }

    get percentComplete() {
        return this.mapY / this.hillMap.length
    }

    setPlayer(playerData, index) {
        this.id = index

        this.gameX = this.startGameX - (index * 80)

        this.username.text = playerData.username
        this.body.tint = this.scene.getColor(playerData.color)

        this.setSled(playerData.hand)
    }

    setSled(hand) {
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
                this.sled.visible = true
                break
        }

        // Update frame immediately
        this.setFrame(1)
    }

    update() {
        if (!this.isStopped) {
            this.updateSpeed()
            this.updatePosition()
            this.checkMap()
            this.move()
        }
    }

    updateSpeed() {
        if (this.isFinished) {
            this.updateFinishFriction()

        } else if (this.isCrashed) {
            this.updateCrashFriction()

        } else if (this.speed < this.maxSpeed) {
            // Increase speed
            this.speed = Math.min(this.speed + this.gravity, this.maxSpeed)

        } else if (this.speed > this.maxSpeed) {
            // Reduce speed
            this.speed = Math.max(this.speed * this.friction, this.maxSpeed)

        } else {
            this.speed = this.maxSpeed
        }
    }

    updateFinishFriction() {
        this.speed *= this.finishFriction

        if (this.speed < 1) {
            this.endFinish()
        }
    }

    updateCrashFriction() {
        this.speed *= this.crashFriction

        if (this.speed < 1) {
            this.endCrash()
        }
    }

    updatePosition() {
        this.gameY = Math.round(this.gameY + this.speed)

        this.map = this.hillMap[this.mapY][this.mapX] * 20
    }

    checkMap() {
        if (this.map <= 180) {
            this.checkJump()
            return

        } else if (this.map === 200) {
            this.isFinished = true
        }

        // Used for calculating shadow y for non-jump moves
        this.map = this.height
    }

    checkJump() {
        if (this.height > this.map) {
            this.startJump()
        } else {
            this.endJump()
        }
    }

    startJump() {
        this.isJumping = true
        this.jumpDropOff += this.jumpGravity

        this.height -= this.jumpDropOff
    }

    endJump() {
        this.isJumping = false
        this.jumpDropOff = 0

        this.height = this.map
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

    startBoost() {
        this.speed = this.boostSpeed
    }

    endFinish() {
        this.isStopped = true
    }

    move() {
        if (this.started && !this.isCrashed) {
            this.updateFrame()

            this.lastGameX = this.gameX
        }

        // Update actual x and y
        this.x = this.gameX + this.gameY
        this.y = (this.gameY * 0.6) - (this.gameX * 0.6)

        this.character.y =  -this.height
        this.shadow.y = -this.map

        this.depth = this.mapX * 10 + 1000

        this.icon.x = this.percentComplete * this.scene.bar.width
    }

    updateFrame() {
        if (this.gameX < this.lastGameX) {
            this.playLeft()

        } else if (this.gameX > this.lastGameX) {
            this.playRight()

        } else if (this.isJumping) {
            this.setFrame(4)

        } else {
            this.setFrame(1)
        }
    }

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

    moveUp() {
        if (!this.isFinished) {
            this.gameX = Math.min(this.gameX + this.turnSpeed, 360)
        }
    }

    moveDown() {
        if (!this.isFinished) {
            this.gameX = Math.max(this.gameX - this.turnSpeed, 0)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
