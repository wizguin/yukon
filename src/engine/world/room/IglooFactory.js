export default class IglooFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene
        this.igloos = world.crumbs.igloos
    }

    createIgloo(args) {
        let config = this.igloos[args.type]

        if (config.name in this.scene.manager.keys) {
            this.scene.start(config.name, { args: args })

            return this.scene.get(config.name)

        } else {
            return this.scene.add(config.name, config.scene, true, { args: args })
        }
    }

}
