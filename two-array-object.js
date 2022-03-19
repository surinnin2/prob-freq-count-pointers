// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {

    const returnObj = {}

    keys.forEach((key, idx) => {
        if (idx >= values.length) {
            added = null
        } else {
            added = values[idx]
        }
        returnObj[key] = added
    })

    return returnObj
}

module.exports = twoArrayObject
