const funcs = require('./1.2');

const trueTestCasts = [
    ['abcdefghi', 'ihgfedcba'],
    ['1a1', 'a11'],
    ['1234567812345678', '8877665544332211'],
    ['icarraci', 'carcarii']
];

const falseTestCasts = [
    ['abcdefghiz', 'ihgfedcbaa'],
    ['1a1', '11'],
    ['1122334455667788', '9911223344556677'],
    ['45678', '1239']
];

falseTestCasts.forEach((testCase) => {
    test(`${testCase[0]} and ${testCase[1]} to return false`, () => {
        expect(funcs.isPermutationSort(testCase[0], testCase[1])).toBe(false);
    });
    test(`${testCase[0]} and ${testCase[1]} to return false`, () => {
        expect(funcs.isPermutationCharCount(testCase[0], testCase[1])).toBe(false);
    });
})


trueTestCasts.forEach((testCase) => {
    test(`${testCase[0]} and ${testCase[1]} to return true`, () => {
        expect(funcs.isPermutationSort(testCase[0], testCase[1])).toBe(true);
    });
    test(`${testCase[0]} and ${testCase[1]} to return true`, () => {
        expect(funcs.isPermutationCharCount(testCase[0], testCase[1])).toBe(true);
    });
})
