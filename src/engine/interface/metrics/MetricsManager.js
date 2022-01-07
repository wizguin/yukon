export default class MetricsManager {

    constructor() {
        this.registerTextMetrics()

        this.metrics = this.getTextMetrics()
    }

    getTextMetrics() {
        let metrics = localStorage.getItem('text_metrics')

        if (!metrics) {
            return {}
        }

        try {
            return JSON.parse(metrics)
        } catch (error) {
            localStorage.removeItem('text_metrics')

            return {}
        }
    }

    registerTextMetrics() {
        let metrics = this
        let factory = Phaser.GameObjects.GameObjectFactory

        factory.remove('text')

        factory.register('text', function(x, y, text, style) {
            let metricsText = createText(this.scene, x, y, text, style)

            metricsText._setStyle = metricsText.setStyle
            metricsText.setStyle = setStyle

            return this.displayList.add(metricsText)
        })

        function createText(scene, x, y, text, style) {
            metrics.setMetrics(style)

            let metricsText = new Phaser.GameObjects.Text(scene, x, y, text, style)

            metrics.createMetrics(metricsText, style)

            return metricsText
        }

        function setStyle(style) {
            metrics.setMetrics(style)

            this._setStyle(style)

            metrics.createMetrics(this, style)
        }
    }

    setMetrics(style) {
        let key = this.getKey(style)

        if (key in this.metrics) {
            style.metrics = this.metrics[key]
        }
    }

    createMetrics(text, style) {
        let key = this.getKey(style)

        if (key in this.metrics) {
            return
        }

        if (key == 'default') {
            this.metrics[key] = {
                ascent: 0,
                descent: 0,
                fontSize: 0
            }

        } else {
            this.metrics[key] = text.getTextMetrics()
        }

        localStorage.setItem('text_metrics', JSON.stringify(this.metrics))
    }

    getKey(style) {
        if (!style || !style.fontFamily || !style.fontSize) {
            return 'default'
        }

        let fontSize = style.fontSize.toString().replace('px', '')

        return `${style.fontFamily}${fontSize}`
    }

}
