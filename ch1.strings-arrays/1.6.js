/*
 * Time: N
 */
function stringCompression(s) {
    let count = 0;
    let compressedString = '';
    let i = 0;
    // for (let i = 0; i < s.length; i++) {
    while (i < s.length) {
        count = 0;
        while (s[i + 1] && s[i + 1] === s[i]) {
            count++;
            i++;
        }

        count++;
        compressedString += `${count}${s[i]}`;
        i++;
    }
    return compressedString.length < s.length ? compressedString : s;
}

module.exports = stringCompression;