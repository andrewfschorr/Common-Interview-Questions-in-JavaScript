/*
 * Time: 2(N lg N) => N lg N
 * Space: N
 */
function isPermutationSort(a, b) {
    return a.split('').sort().join('') === b.split('').sort().join('');
}

/*
 * Time: N
 * Space: N
 */
function isPermutationCharCount(a, b) {
    const countMap = {}
    for (let i = 0; i < a.length; i++) {
        if (countMap[a[i]] === undefined) {
            countMap[a[i]] = 1;
        } else {
            countMap[a[i]]++;
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (countMap[b[i]] === undefined) {
            return false
        } else if (countMap[b[i]] === 1) {
            delete countMap[b[i]];
        } else {
            countMap[b[i]]--;
        }
    }
    return Object.keys(countMap).length === 0;
}

module.exports = {
    isPermutationSort,
    isPermutationCharCount,
}