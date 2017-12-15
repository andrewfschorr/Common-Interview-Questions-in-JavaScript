function stringHasUniqueCharacters(s) {
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
 * This is constant space... but N^2
 */
function stringHasUniqueCharactersConstanSpace(s) {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) return false;
        }
    }
    return true;
}

const sUnique = 'abcdefghijklmnopqrstuv';
const sNotUnique = 'abcdefgjihajlm';

test(`${sUnique} to return true`, () => {
    expect(stringHasUniqueCharacters(sUnique)).toBe(true);
});

test(`${sNotUnique} to return false`, () => {
    expect(stringHasUniqueCharacters(sNotUnique)).toBe(false);
});

test(`${sUnique} to return true`, () => {
    expect(stringHasUniqueCharactersConstanSpace(sUnique)).toBe(true);
});

test(`${sNotUnique} to return false`, () => {
    expect(stringHasUniqueCharactersConstanSpace(sNotUnique)).toBe(false);
});