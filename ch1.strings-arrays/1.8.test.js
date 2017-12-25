const zeroMatrix = require('./1.8');

const testCases = [
    {
        original: [
            [1,2,3],
            [4,0,6],
            [7,8,9],
        ],
        result: [
            [1,0,3],
            [0,0,0],
            [7,0,9],
        ]
    },
    {
        original: [
            [0,2,0],
            [4,5,6],
            [0,8,0],
        ],
        result: [
            [0,0,0],
            [0,5,0],
            [0,0,0],
        ]
    }
];

testCases.forEach((testCase) => {
    test(`${testCase.original} zeroed out should be ${testCase.result}`, () => {
        expect(JSON.stringify(zeroMatrix(testCase.original))).toBe(JSON.stringify(testCase.result));
    });
});