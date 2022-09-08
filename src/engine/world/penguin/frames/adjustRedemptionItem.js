const offset = 10000


export default function(item) {
    if (item > 10000 && item < 20000) {
        item -= offset

    } else if (item >= 30000 && item < 40000) {
        item -= offset
    }

    return item
}
