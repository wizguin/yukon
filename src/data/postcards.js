const postcards = {}

importPostcards(require.context('../scenes/postcards/', false, /\.js$/))

function importPostcards(r) {
    for (const key of r.keys()) {
        const id = key.replace('./Postcard', '').replace('.js', '')

        postcards[id] = r(key).default
    }
}

export default postcards
