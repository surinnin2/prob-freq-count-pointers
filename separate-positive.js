// add whatever parameters you deem necessary
function separatePositive(arr) {

    let counter = 0
    let idx = 0
    
    while (counter < arr.length && idx < arr.length) {
        if (arr[idx] < 0) {
            arr.push(arr.splice(idx, 1)[0])
            counter += 1
        } else {
            idx += 1
        }
    }

    return arr
}  

module.exports = separatePositive