// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {

    let stringed1 = String(int1)
    let stringed2 = String(int2)

    function freqCounter(string) {
        const numCount = new Map()
        for (let idx in string) {
            numCount.set(string[idx], numCount.get(string[idx]) + 1 || 1)
        }

        return numCount
    }

    count1 = freqCounter(stringed1)
    count2 = freqCounter(stringed2) 
    
    let returnBool = true

    count1.forEach((value, key) => {
        if (count2.get(key)) {
            if (count2.get(key) != value) {
                returnBool = false
            }
        } else {
            returnBool = false
        }
    })

    return returnBool
}

module.exports = sameFrequency