// add whatever parameters you deem necessary
function constructNote(message, letters) {

    function freqCounter(string) {
        const count = new Map()
        
        for (i = 0; i < string.length; i++) {
            count.set(string[i], count.get(string[i]) + 1 || 1)
        }
        return count
    }

    const countMessage = freqCounter(message)
    const countLetters = freqCounter(letters)
    let returnBool = true

    countMessage.forEach((value, key) => {
        if (countLetters.get(key)) {
            if (countLetters.get(key) < value) {
                returnBool = false
            }
        } else {
            returnBool = false
        }
    })

    return returnBool

}


module.exports = constructNote