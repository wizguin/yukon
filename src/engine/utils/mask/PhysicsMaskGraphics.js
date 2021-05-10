/**
 * Extended Phaser graphics object for creating masks with Physics Editor data.
 *
 * @extends Phaser.GameObjects.Graphics
 */
export default class PhysicsMaskGraphics extends Phaser.GameObjects.Graphics {

    constructor(scene, fixtures) {
        super(scene)

        this.beginPath()

        // Physics Editor polygons are made up of multiple shapes, this draws all of them
        fixtures.map(fixture => {
            fixture.vertices.map(points => {
                this.fillPoints(points)
            })
        })
    }

    /**
     * Overridden fillPoints function that removes beginPath and always closes the shape.
     *
     * @param {Array} points - The points to fill
     * @returns {this} This Game Object
     */
    fillPoints(points) {
        let endIndex = points.length

        // Start shape
        this.moveTo(points[0].x, points[0].y)

        for (var i = 1; i < endIndex; i++) {
            this.lineTo(points[i].x, points[i].y)
        }

        // Close shape
        this.lineTo(points[0].x, points[0].y)

        this.fillPath()
    }

}
