// add whatever parameters you deem necessary
function countPairs(arr, num) {

    const sorted = arr.sort((a, b) => a-b)
    let firstIdx = 0
    let secondIdx = 1
    let sum = sorted[firstIdx] + sorted[secondIdx]
    let pairs = 0
  
    while (sorted[firstIdx] <= num && firstIdx < arr.length - 1) {

        while (sum < num && secondIdx < arr.length) {
            sum = sorted[firstIdx] + sorted[secondIdx]
            secondIdx += 1
        }

        if (sum === num) {
            pairs += 1
        }


        //reset sum and secondIdx, increment firstIdx
        firstIdx ++
        secondIdx = firstIdx + 1
        sum = sorted[firstIdx] + sorted[secondIdx]
    }

    return pairs
}

module.exports = countPairs