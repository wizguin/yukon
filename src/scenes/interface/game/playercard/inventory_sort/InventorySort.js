import FloatingMenu from '../../floating/FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class InventorySort extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;
        /** @type {Phaser.GameObjects.Container} */
        this.other_container;


        // safe
        const safe = scene.add.rectangle(0, 0, 320, 80);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // close
        const close = scene.add.rectangle(0, 0, 295, 48);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // all
        const all = scene.add.image(0, -70, "main", "list/small");
        this.add(all);

        // all_text
        const all_text = scene.add.text(0, -70, "", {});
        all_text.setOrigin(0.5, 0.5);
        all_text.text = "All Items";
        all_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(all_text);

        // other
        const other = scene.add.image(0, -134, "main", "list/small_arrow");
        this.add(other);

        // other_text
        const other_text = scene.add.text(0, -134, "", {});
        other_text.setOrigin(0.5, 0.5);
        other_text.text = "Other Items";
        other_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(other_text);

        // colors
        const colors = scene.add.image(0, -198, "main", "list/small");
        this.add(colors);

        // colors_text
        const colors_text = scene.add.text(0, -198, "", {});
        colors_text.setOrigin(0.5, 0.5);
        colors_text.text = "Colors";
        colors_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(colors_text);

        // feet
        const feet = scene.add.image(0, -262, "main", "list/small");
        this.add(feet);

        // feet_text
        const feet_text = scene.add.text(0, -262, "", {});
        feet_text.setOrigin(0.5, 0.5);
        feet_text.text = "Feet Items";
        feet_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(feet_text);

        // hand
        const hand = scene.add.image(0, -326, "main", "list/small");
        this.add(hand);

        // hand_text
        const hand_text = scene.add.text(0, -326, "", {});
        hand_text.setOrigin(0.5, 0.5);
        hand_text.text = "Hand Items";
        hand_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(hand_text);

        // body
        const body = scene.add.image(0, -390, "main", "list/small");
        this.add(body);

        // body_text
        const body_text = scene.add.text(0, -390, "", {});
        body_text.setOrigin(0.5, 0.5);
        body_text.text = "Body Items";
        body_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(body_text);

        // neck
        const neck = scene.add.image(0, -454, "main", "list/small");
        this.add(neck);

        // neck_text
        const neck_text = scene.add.text(0, -454, "", {});
        neck_text.setOrigin(0.5, 0.5);
        neck_text.text = "Neck Items";
        neck_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(neck_text);

        // face
        const face = scene.add.image(0, -518, "main", "list/small");
        this.add(face);

        // face_text
        const face_text = scene.add.text(0, -518, "", {});
        face_text.setOrigin(0.5, 0.5);
        face_text.text = "Face Items";
        face_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(face_text);

        // head
        const head = scene.add.image(0, -582, "main", "list/small");
        this.add(head);

        // head_text
        const head_text = scene.add.text(0, -582, "", {});
        head_text.setOrigin(0.5, 0.5);
        head_text.text = "Head Items";
        head_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(head_text);

        // other_container
        const other_container = scene.add.container(264, -198);
        other_container.visible = false;
        this.add(other_container);

        // inventory_list_item_9
        const inventory_list_item_9 = scene.add.image(0, 0, "main", "list/small");
        other_container.add(inventory_list_item_9);

        // inventory_list_item_10
        const inventory_list_item_10 = scene.add.image(0, 64, "main", "list/small");
        other_container.add(inventory_list_item_10);

        // inventory_list_item_11
        const inventory_list_item_11 = scene.add.image(0, 128, "main", "list/small");
        other_container.add(inventory_list_item_11);

        // pins_text
        const pins_text = scene.add.text(0, 0, "", {});
        pins_text.setOrigin(0.5, 0.5);
        pins_text.text = "Pins/Flags";
        pins_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        other_container.add(pins_text);

        // awards_text
        const awards_text = scene.add.text(0, 64, "", {});
        awards_text.setOrigin(0.5, 0.5);
        awards_text.text = "Awards";
        awards_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        other_container.add(awards_text);

        // backgrounds_text
        const backgrounds_text = scene.add.text(0, 128, "", {});
        backgrounds_text.setOrigin(0.5, 0.5);
        backgrounds_text.text = "Backgrounds";
        backgrounds_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        other_container.add(backgrounds_text);

        // all (components)
        const allButton = new Button(all);
        allButton.spriteName = "list/small";
        allButton.hoverCallback = () => other_container.visible = false;
        allButton.callback = () => this.filterInventory('All Items', null);
        allButton.activeFrame = false;

        // other (components)
        const otherButton = new Button(other);
        otherButton.spriteName = "list/small_arrow";
        otherButton.hoverCallback = () => other_container.visible = true;
        otherButton.callback = () => this.filterInventory('Other Items', 'other');
        otherButton.activeFrame = false;

        // colors (components)
        const colorsButton = new Button(colors);
        colorsButton.spriteName = "list/small";
        colorsButton.hoverCallback = () => other_container.visible = false;
        colorsButton.callback = () => this.filterInventory('Colors', 'color');
        colorsButton.activeFrame = false;

        // feet (components)
        const feetButton = new Button(feet);
        feetButton.spriteName = "list/small";
        feetButton.hoverCallback = () => other_container.visible = false;
        feetButton.callback = () => this.filterInventory('Feet Items', 'feet');
        feetButton.activeFrame = false;

        // hand (components)
        const handButton = new Button(hand);
        handButton.spriteName = "list/small";
        handButton.hoverCallback = () => other_container.visible = false;
        handButton.callback = () => this.filterInventory('Hand Items', 'hand');
        handButton.activeFrame = false;

        // body (components)
        const bodyButton = new Button(body);
        bodyButton.spriteName = "list/small";
        bodyButton.hoverCallback = () => other_container.visible = false;
        bodyButton.callback = () => this.filterInventory('Body Items', 'body');
        bodyButton.activeFrame = false;

        // neck (components)
        const neckButton = new Button(neck);
        neckButton.spriteName = "list/small";
        neckButton.hoverCallback = () => other_container.visible = false;
        neckButton.callback = () => this.filterInventory('Neck Items', 'neck');
        neckButton.activeFrame = false;

        // face (components)
        const faceButton = new Button(face);
        faceButton.spriteName = "list/small";
        faceButton.hoverCallback = () => other_container.visible = false;
        faceButton.callback = () => this.filterInventory('Face Items', 'face');
        faceButton.activeFrame = false;

        // head (components)
        const headButton = new Button(head);
        headButton.spriteName = "list/small";
        headButton.hoverCallback = () => other_container.visible = false;
        headButton.callback = () => this.filterInventory('Head Items', 'head');
        headButton.activeFrame = false;

        // inventory_list_item_9 (components)
        const inventory_list_item_9Button = new Button(inventory_list_item_9);
        inventory_list_item_9Button.spriteName = "list/small";
        inventory_list_item_9Button.callback = () => this.filterInventory('Pins/Flags', 'flag');
        inventory_list_item_9Button.activeFrame = false;

        // inventory_list_item_10 (components)
        const inventory_list_item_10Button = new Button(inventory_list_item_10);
        inventory_list_item_10Button.spriteName = "list/small";
        inventory_list_item_10Button.callback = () => this.filterInventory('Awards', 'award');
        inventory_list_item_10Button.activeFrame = false;

        // inventory_list_item_11 (components)
        const inventory_list_item_11Button = new Button(inventory_list_item_11);
        inventory_list_item_11Button.spriteName = "list/small";
        inventory_list_item_11Button.callback = () => this.filterInventory('Backgrounds', 'photo');
        inventory_list_item_11Button.activeFrame = false;

        this.safe = safe;
        this.close = close;
        this.other_container = other_container;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get inventory() {
        return this.parentContainer.inventory
    }

    filterInventory(text, slot) {
        this.inventory.active_text.text = text
        this.inventory.filter = slot
        this.inventory.page = 1
        this.inventory.showPage()

        this.closeMenu()
    }

    showMenu() {
        // Move back to fill entire canvas
        let matrix = this.getWorldTransformMatrix()

        this.back.x = -matrix.getX(0, 0)
        this.back.y = -matrix.getY(0, 0)

        this.visible = true
    }

    closeMenu() {
        this.other_container.visible = false
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
