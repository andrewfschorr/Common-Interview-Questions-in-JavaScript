const rotateMtx = require('./1.7');

const testCases = [
    {
        original: [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ],
        result: [
            [7,4,1],
            [8,5,2],
            [9,6,3],
        ]
    },
    {
        original: [
            [1,2],
            [3,4]
        ],
        result: [
            [3,1],
            [4,2],
        ]
    }
];

testCases.forEach((testCase) => {
    test(`${testCase.original} rotated should be ${testCase.result}`, () => {
        expect(JSON.stringify(rotateMtx(testCase.original))).toBe(JSON.stringify(testCase.result));
    });
});