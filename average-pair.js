// add whatever parameters you deem necessary
function averagePair(arr, target) {
    const averages = new Set()

    arr.forEach((num, idx, arr) => {
        for (i = idx + 1; i < arr.length; i++) {
            averages.add((num + arr[i])/2)
        }
    })

    return averages.has(target)
    
}

module.exports = averagePair