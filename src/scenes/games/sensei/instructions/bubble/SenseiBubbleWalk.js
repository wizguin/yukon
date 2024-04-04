/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */

import BeltColors from '../../config/BeltColors'

/* END-USER-IMPORTS */

export default class SenseiBubbleWalk extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.backArm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.body;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beltLine;
        /** @type {Phaser.GameObjects.Sprite} */
        this.belt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.frontArm;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.colorSprites;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.beltSprites;


        // backFoot
        const backFoot = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/1_instance3_1");
        this.add(backFoot);

        // frontFoot
        const frontFoot = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/2_instance5_1");
        this.add(frontFoot);

        // backArmLine
        const backArmLine = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/3_instance7_1");
        this.add(backArmLine);

        // backArm
        const backArm = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/4_backarm_1");
        this.add(backArm);

        // bodyLine
        const bodyLine = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/5_instance8_1");
        this.add(bodyLine);

        // body
        const body = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/6_body_1");
        this.add(body);

        // shadow
        const shadow = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/7_instance10_1");
        this.add(shadow);

        // eye
        const eye = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/8_instance11_1");
        this.add(eye);

        // pupil
        const pupil = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/9_instance13_1");
        this.add(pupil);

        // sensei
        const sensei = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/10_sensei_1");
        this.add(sensei);

        // beak
        const beak = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/11_instance18_1");
        this.add(beak);

        // beltLine
        const beltLine = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/12_beltline_1");
        this.add(beltLine);

        // belt
        const belt = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/13_belt_1");
        this.add(belt);

        // frontArmLine
        const frontArmLine = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/14_instance22_1");
        this.add(frontArmLine);

        // frontArm
        const frontArm = scene.add.sprite(0, 0, "senseiinstructions", "bubble/walk/15_frontarm_1");
        this.add(frontArm);

        // lists
        const colorSprites = [body, frontArm, backArm];
        const beltSprites = [belt, beltLine];

        this.backArm = backArm;
        this.body = body;
        this.sensei = sensei;
        this.beltLine = beltLine;
        this.belt = belt;
        this.frontArm = frontArm;
        this.colorSprites = colorSprites;
        this.beltSprites = beltSprites;

        /* START-USER-CTR-CODE */

        this.end = 70

        this.createAnims()

        // Start hidden
        this.close()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setColor(color) {
        this.colorSprites.forEach(sprite => sprite.tint = this.world.getColor(color))
    }

    setBelt(rank) {
        const hasBelt = rank > 0

        this.beltSprites.forEach(sprite => sprite.visible = hasBelt)

        if (hasBelt) {
            this.belt.tint = BeltColors[rank - 1]
        }
    }

    setSensei(sensei) {
        this.sensei.visible = sensei
    }

    createAnims() {
        this.list.forEach(child => this.createAnim(child))
    }

    createAnim(child) {
        const animKey = this.getAnimKey(child)

        if (this.scene.anims.exists(animKey)) {
            return
        }

        const frameNames = this.scene.anims.generateFrameNames('senseiinstructions', {
            prefix: `${animKey}_`,
            start: 1,
            end: this.end
        })

        this.scene.anims.create({
            key: animKey,
            frames: frameNames,
            frameRate: 24,
            repeat: 0
        })
    }

    playAnim(child) {
        const animKey = this.getAnimKey(child)

        child.play(animKey)
    }

    getAnimKey(child) {
        const frameName = child.frame.name

        // Remove frame number (_1) from frameName
        return frameName.split('_').slice(0, -1).join('_')
    }

    show() {
        this.list.forEach(child => this.playAnim(child))

        super.show()
    }

    close() {
        super.close()

        this.list.forEach(child => child.stop())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
