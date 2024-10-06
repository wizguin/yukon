/**
 * Aligns an array of game objects into a grid layout
 * based on their array index and the provided configuration.
 *
 * @param {Object} config - Configuration object.
 * @param {Array<Phaser.GameObjects.GameObject>} config.items - Objects to align.
 * @param {number} config.cols - Number of columns in the grid.
 * @param {number} config.cellWidth - Width of individual cell.
 * @param {number} config.cellHeight - Height of individual cell.
 * @param {number} config.startX - Initial X position for the top left cell.
 * @param {number} config.startY - Initial Y position for the top left cell.
 * @param {function} [config.callback] - Callback to execute after each object is positioned.
 */
export function alignGrid(config) {
    const { items, cols, cellWidth, cellHeight, startX = 0, startY = 0, callback } = config

    for (let i = 0; i < items.length; i++) {
        const item = items[i]

        const colIndex = i % cols
        const rowIndex = Math.floor(i / cols)

        const offsetX = colIndex * cellWidth
        const offsetY = rowIndex * cellHeight

        item.x = startX + offsetX
        item.y = startY + offsetY

        if (callback) {
            callback(item, colIndex, rowIndex)
        }
    }
}

/**
 * Calculates the start position required for the grid to be aligned around its center.
 */
export function getCenteredStartPos(cols, rows, cellWidth, cellHeight = cellWidth) {
    return {
        x: getCenteredStartX(cols, cellWidth),
        y: getCenteredStartY(rows, cellHeight)
    }
}

function getCenteredStartX(cols, cellWidth) {
    return -((cols - 1) * (cellWidth / 2))
}

function getCenteredStartY(rows, cellHeight) {
    return -((rows - 1) * (cellHeight / 2))
}
