/*
 * N = |s|
 * Time: N
 * Space: N
 */
function isPalindromePermutations(s) {
    const letterMap = {};
    for (let i = 0; i < s.length; i++) {
        if (letterMap[s[i]] === undefined) {
            letterMap[s[i]] = true;
        } else {
            delete letterMap[s[i]];
        }
    }
    return Object.keys(letterMap).length <= 1;
}

module.exports = isPalindromePermutations;