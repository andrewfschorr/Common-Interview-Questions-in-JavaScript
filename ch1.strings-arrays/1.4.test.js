const isPalindrome = require('./1.4');

const testCasts = {
    'aabaa': true,
    'aaaaaaaaaaaaa': true,
    'aaaaaaaaaaaa': true,
    'abcabc': true,
    'abcabcab': false,
};

for (let s in testCasts) {
    const result = testCasts[s];
    test(`${s} to evaluate to ${result}`, () => {
        expect(isPalindrome(s)).toBe(result);
    });
}