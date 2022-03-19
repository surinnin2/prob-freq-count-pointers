// add whatever parameters you deem necessary
function isSubsequence(sub, seq) {

    let subIdx = 0
    let seqIdx = 0

    while (seqIdx < seq.length) {
        if (sub[subIdx] != seq[seqIdx]) {
            seqIdx += 1
        } else {
            subIdx += 1
            seqIdx += 1
        }
        if (subIdx === sub.length) {
            return true
        }

    }

    return false

}

module.exports = isSubsequence