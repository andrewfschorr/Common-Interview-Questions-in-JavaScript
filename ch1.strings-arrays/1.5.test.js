import * as funcs from './1.5';

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