/*
 * Time: N
 */
function oneEditAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1 === longer ? s2 : s1;
    let hasSeenDifferentLetter = false;
    let i = 0, j = 0;
    while (i < shorter.length && j < longer.length) {
        if (shorter[i] !== longer[j]) {
            if (hasSeenDifferentLetter) {
                return false
            } else {
                hasSeenDifferentLetter = true;
            }
            if (shorter.length === longer.length) {
                j++;
                i++;
            } else {
                i++;
            }
        } else {
            i++;
            j++;
        }
    }
    return true;
}


/*
 * Time: N ^ 3 ?
 *
 * The ACTUAL question asks if the strings are 1 edit away from each other
 * While that's all well and good, this computes total edit distance, as thats more interesting
 */
function editDistanceRec(s1, s2, edits = 0) {
    if (s1.length === 0 || s2.length === 0) {
        if (s1.length && !s2.length) {
            edits += s1.length;
        } else if (s2.length && !s1.length) {
            edits += s2.length;
        }
        return edits
    } else {
        for (let i = 0; i < s1.length; i++) {
            if (s1[0] === s2[0]) {
                return editDistanceRec(s1.slice(1), s2.slice(1), edits);
            } else {

                return Math.min(
                    editDistanceRec(s1.slice(1), s2, edits + 1),
                    editDistanceRec(s1, s2.slice(1), edits + 1),
                    editDistanceRec(s1.slice(1), s2.slice(1), edits + 1)
                );
            }
        }
    }
}

/*
 * Time: N * M
 * Space: N * M
 */
function editDistanceDp(s1, s2) {
    const table = new Array(s1.length);
    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(s2.length);
    }
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            let val;
            if (j === 0 && i === 0) {
                if (s1[i] === s2[j]) {
                    val = 0;
                } else {
                    val = 1;
                }
            } else if (i === 0) {
                val = table[i][j - 1] + 1;
            } else if (j === 0) {
                val = table[i - 1][j] + 1;
            } else {
                if (s1[i] === s2[j]) {
                    val = table[i - 1][j - 1];
                } else {
                    val = Math.min(
                        table[i - 1][j - 1],
                        table[i - 1][j],
                        table[i][j - 1]
                    ) + 1;
                }
            }
            table[i][j] = val;
        }
    }
    return table[table.length - 1][table[table.length - 1].length - 1];
}

module.exports = {
    editDistanceRec,
    editDistanceDp,
    oneEditAway
}
