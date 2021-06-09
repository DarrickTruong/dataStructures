let kmp = (string, pattern) => {


    // create pattern table
    let patternTable = [0]
    let prefixIndex = 0
    let suffixIndex = 1

    while (suffixIndex < pattern.length) {
        console.log(prefixIndex, suffixIndex)
        console.log(pattern[prefixIndex], pattern[suffixIndex])
        if (pattern[prefixIndex] === pattern[suffixIndex]) {

            // match
            patternTable[suffixIndex] = prefixIndex + 1
            prefixIndex++
            suffixIndex++
        } else if (prefixIndex === 0) {

            // no match
            patternTable[suffixIndex] = 0
            suffixIndex++
        } else {
            prefixIndex = 0
        }
    }

    console.log(patternTable)


}

console.log(kmp("hello", "ababd"))