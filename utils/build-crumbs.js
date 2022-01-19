// Merges all crumb files into one

const fs = require('fs')
const path = require('path')
const lang = 'en'
const assets = path.resolve(__dirname, `../assets/media/crumbs/${lang}`)

const crumbs = {
    flooring: require(`${assets}/flooring.json`),
    furniture: require(`${assets}/furniture.json`),
    igloos: require(`${assets}/igloos.json`),
    items: require(`${assets}/items.json`),
    quick_keys: require(`${assets}/quick_keys.json`),
    safe_messages: require(`${assets}/safe_messages.json`),
    secret_frames: require(`${assets}/secret_frames.json`),
    strings: require(`${assets}/strings.json`),
    worlds: require(`${assets}/worlds.json`)
}

try {
    fs.writeFileSync(`${assets}/crumbs.json`, JSON.stringify(crumbs))
    console.log('Done')
} catch (error) {
    console.log(error)
}
