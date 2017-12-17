const stringCompression = require('./1.6');

const testCases = [
    ['heloworld', 'heloworld'],
    ['woorrrllllddddd', '1w2o3r4l5d'],
    ['hhellllllllooooo!', '2h1e8l5o1!'],
    ['bbbbbb', '6b'],
];

testCases.forEach((testCase) => {
    test(`${testCase[0]} compressed should be ${testCase[1]}`, () => {
        expect(stringCompression(testCase[0])).toBe(testCase[1]);
    });
});