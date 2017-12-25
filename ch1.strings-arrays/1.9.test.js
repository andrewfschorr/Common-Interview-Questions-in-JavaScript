const {isRotation} = require('./1.9');

[
    ['waterbottle', 'erbottlewat', true],
    ['ABACD', 'ABACD', true],
    ['waterbottle', 'somethingelse', false],
].forEach((testCase) => {
    test(`${testCase[0]} is a rotation of ${testCase[1]}, should be ${testCase[2]}`, () => {
        expect(isRotation(testCase[0], testCase[1])).toBe(testCase[2]);
    })
})