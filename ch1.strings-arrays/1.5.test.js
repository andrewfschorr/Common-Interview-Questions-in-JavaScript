const funcs = require('./1.5');

const testCasesSimple = [
    ['pale', 'pale', true],
    ['pales', 'pale', true],
    ['pale', 'bale', true],
    ['pale', 'bae', false],
];

testCasesSimple.forEach((testCase) => {
    const result = testCase[2];
    test(`${testCase[0]} and ${testCase[1]} to be ${result}`, () => {
        expect(funcs.oneEditAway(testCase[0], testCase[1])).toBe(result);
    });
});

const testCases = [
    ['saturday', 'sunday', 3],
    ['abcd', 'abcde', 1],
    ['a', 'a', 0],
    ['aaaaaaaaaaaaaaaaa', 'a', 16],
];

testCases.forEach((testCase) => {
    const result = testCase[2];
    test(`${testCase[0]} and ${testCase[2]} to have ${result} min cuts`, () => {
        expect(funcs.editDistanceRec(testCase[0], testCase[1])).toBe(result);
    });
    test(`${testCase[0]} and ${testCase[2]} to have ${result} min cuts`, () => {
        expect(funcs.editDistanceDp(testCase[0], testCase[1])).toBe(result);
    });
});