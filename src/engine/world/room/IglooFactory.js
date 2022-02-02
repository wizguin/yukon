export default class IglooFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene
        this.igloos = world.crumbs.scenes.igloos
    }

    createIgloo(args) {
        let config = this.igloos[args.type]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, { args: args })

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { args: args })
        }
    }

}
