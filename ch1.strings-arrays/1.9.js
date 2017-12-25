/*
 * runtime is dependent on `isSubstring` method (indexOf in JS)
 * if you assume that isSubstring runs in O(A+B) time (on strings of length Aand B),
 * then the runtime of isRotation is O( N) .
 *
 * Finds if string 1 is a rotation of string 2, example:
 * is erbottlewat substring of waterbottlewaterbottle
 * S1 = xy = waterbottle
 * S2 = yx = erbottlewat
 */
function isRotation(s1, s2) {
    if (s1.length === s2.length && (s1 && s2)) {
        return `${s1}${s1}`.indexOf(s2) !== -1;
    }
    return false;
}

module.exports = {isRotation};

