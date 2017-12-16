/*
 * Time: N
 * Space: N
 */
export function stringHasUniqueCharacters(s) {
    const letterMap = {};
    for (let i = 0; i < s.length; i++) {
        if (letterMap[s[i]] === undefined) {
            letterMap[s[i]] = true;
        } else {
            return false;
        }
    }
    return true;
}

/*
 * Time: N^2
 * Space: 1
 */
export function stringHasUniqueCharactersConstantSpace(s) {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) return false;
        }
    }
    return true;
}

/*
 * Time: N lg N
 * Space: 1
 */
export function stringHasUniqueCharactersSort(s) {
    s = s.split('').sort().join('');
    for (let i = 0; i < s.length; i++) {
        if (s[i- 1] && s[i] === s[i-1]) {
            return false;
        }
    }
    return true;
}