/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import PetInventory from "./inventory/PetInventory";
import Button from "../../../components/Button";
import ShowHint from "../../../components/ShowHint";
import SimpleButton from "../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PetCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {PetInventory} */
        this.inventory;
        /** @type {Phaser.GameObjects.Image} */
        this.restBar;
        /** @type {Phaser.GameObjects.Image} */
        this.healthBar;
        /** @type {Phaser.GameObjects.Image} */
        this.energyBar;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Text} */
        this.restText;
        /** @type {Phaser.GameObjects.Text} */
        this.healthText;
        /** @type {Phaser.GameObjects.Text} */
        this.energyText;
        /** @type {Phaser.GameObjects.Image} */
        this.paper;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;
        /** @type {Phaser.GameObjects.Container} */
        this.tab;


        // inventory
        const inventory = new PetInventory(scene, 187, 16);
        inventory.visible = true;
        this.add(inventory);

        // cardBg
        const cardBg = scene.add.image(0, 0, "main", "card-bg");
        this.add(cardBg);

        // petBg
        const petBg = scene.add.image(0, 0, "main", "pet/card_bg");
        petBg.setOrigin(0.5, 0.5012285012285013);
        this.add(petBg);

        // restBar
        const restBar = scene.add.image(73, 166, "main", "pet/bar/1");
        this.add(restBar);

        // healthBar
        const healthBar = scene.add.image(73, 122, "main", "pet/bar/1");
        this.add(healthBar);

        // energyBar
        const energyBar = scene.add.image(73, 78, "main", "pet/bar/1");
        this.add(energyBar);

        // walkButton
        const walkButton = scene.add.image(99, 258, "main", "blue-button");
        this.add(walkButton);

        // feedButton
        const feedButton = scene.add.image(37, 258, "main", "blue-button");
        this.add(feedButton);

        // restButton
        const restButton = scene.add.image(-23, 258, "main", "blue-button");
        this.add(restButton);

        // playButton
        const playButton = scene.add.image(-83, 258, "main", "blue-button");
        this.add(playButton);

        // walk
        const walk = scene.add.image(100, 257, "main", "pet/walk");
        this.add(walk);

        // feed
        const feed = scene.add.image(38, 256, "main", "pet/feed");
        feed.setOrigin(0.5185185185185185, 0.5);
        this.add(feed);

        // rest
        const rest = scene.add.image(-24, 257, "main", "pet/rest");
        rest.setOrigin(0.5, 0.52);
        this.add(rest);

        // play
        const play = scene.add.image(-84, 255, "main", "pet/play");
        this.add(play);

        // name
        const name = scene.add.text(0, -237, "", {});
        name.setOrigin(0.5, 0.5);
        name.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Arial", "fontSize": "32px", "fontStyle": "bold" });
        this.add(name);

        // xButton
        const xButton = scene.add.image(176, -236, "main", "blue-button");
        this.add(xButton);

        // xIcon
        const xIcon = scene.add.image(176, -238, "main", "blue-x");
        this.add(xIcon);

        // restText
        const restText = scene.add.text(-210, 168, "", {});
        restText.setOrigin(0, 0.5);
        restText.text = "REST";
        restText.setStyle({ "align": "right", "fixedWidth":160,"fontFamily": "CCFaceFront", "fontSize": "28px", "stroke": "#003366", "strokeThickness":8,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(restText);

        // healthText
        const healthText = scene.add.text(-210, 120, "", {});
        healthText.setOrigin(0, 0.5);
        healthText.text = "HEALTH";
        healthText.setStyle({ "align": "right", "fixedWidth":160,"fontFamily": "CCFaceFront", "fontSize": "28px", "stroke": "#003366", "strokeThickness":8,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(healthText);

        // energyText
        const energyText = scene.add.text(-210, 77, "", {});
        energyText.setOrigin(0, 0.5);
        energyText.text = "ENERGY";
        energyText.setStyle({ "align": "right", "fixedWidth":160,"fontFamily": "CCFaceFront", "fontSize": "28px", "stroke": "#003366", "strokeThickness":8,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(energyText);

        // shadow
        const shadow = scene.add.image(10, 22, "main", "pet/paper/shadow");
        shadow.setOrigin(0.5026737967914439, 0.5116279069767442);
        this.add(shadow);

        // paper
        const paper = scene.add.image(10, -65, "main", "pet/paper/blue/1");
        this.add(paper);

        // tab
        const tab = scene.add.container(234, -126);
        tab.visible = false;
        this.add(tab);

        // tabHandle
        const tabHandle = scene.add.image(8, 2, "main", "tab");
        tabHandle.angle = -90;
        tab.add(tabHandle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        arrow.angle = -90;
        tab.add(arrow);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = cardBg;

        // walkButton (components)
        const walkButtonButton = new Button(walkButton);
        walkButtonButton.spriteName = "blue-button";
        const walkButtonShowHint = new ShowHint(walkButton);
        walkButtonShowHint.text = "walk_pet_hint";

        // feedButton (components)
        const feedButtonButton = new Button(feedButton);
        feedButtonButton.spriteName = "blue-button";
        feedButtonButton.callback = () => this.onFeedClick();
        const feedButtonShowHint = new ShowHint(feedButton);
        feedButtonShowHint.text = "feed_pet_hint";

        // restButton (components)
        const restButtonButton = new Button(restButton);
        restButtonButton.spriteName = "blue-button";
        restButtonButton.callback = () => this.onRestClick();
        const restButtonShowHint = new ShowHint(restButton);
        restButtonShowHint.text = "rest_pet_hint";

        // playButton (components)
        const playButtonButton = new Button(playButton);
        playButtonButton.spriteName = "blue-button";
        playButtonButton.callback = () => this.onPlayClick();
        const playButtonShowHint = new ShowHint(playButton);
        playButtonShowHint.text = "play_pet_hint";

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "blue-button";
        xButtonButton.callback = () => this.close();

        // tabHandle (components)
        const tabHandleSimpleButton = new SimpleButton(tabHandle);
        tabHandleSimpleButton.callback = () => this.onTabClick();

        this.inventory = inventory;
        this.restBar = restBar;
        this.healthBar = healthBar;
        this.energyBar = energyBar;
        this.name = name;
        this.restText = restText;
        this.healthText = healthText;
        this.energyText = energyText;
        this.paper = paper;
        this.arrow = arrow;
        this.tab = tab;

        /* START-USER-CTR-CODE */

        this.pet = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(pet) {
        this.pet = pet
        this.name.text = pet.name

        this.closeInventory()
        this.updateStats()

        this.widgetLayer.bringToTop(this)
        super.show()
    }

    updateStats() {
        this.energyBar.setFrame(`pet/bar/${this.getStatFrame(this.pet.energy)}`)
        this.healthBar.setFrame(`pet/bar/${this.getStatFrame(this.pet.health)}`)
        this.restBar.setFrame(`pet/bar/${this.getStatFrame(this.pet.rest)}`)

        this.updatePaper()
    }

    updatePaper() {
        const name = this.crumbs.pets[this.pet.petId].name.toLowerCase()

        const happiness = this.pet.happiness
        const frame = happiness > 75 ? 1 : happiness > 50 ? 2 : happiness > 25 ? 3 : 4

        this.paper.setFrame(`pet/paper/${name}/${frame}`)
    }

    getStatFrame(stat) {
        return Math.max(1, Math.round(stat / 10))
    }

    onPlayClick() {
        this.close()

        this.pet.requestPlay()
    }

    onRestClick() {
        this.close()

        this.pet.requestRest()
    }

    onFeedClick() {
        this.openInventory()
    }

    onTabClick() {
        this.openInventory()
    }

    openInventory() {
        this.tab.visible = false
        this.inventory.show()
    }

    closeInventory() {
        this.inventory.close()
        this.tab.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
