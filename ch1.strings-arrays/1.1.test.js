import * as funcs from './1.1';

const testCases = {
    'abcdefghijklmno': true,
    'abcdefghijklmano': false,
    ')(*&^%$#@!': true,
    ')(!*&^%$#@!': false,
};

for (let func in funcs) {
    const fn = funcs[func];
    for (let str in testCases) {
        const result = testCases[str];
        test(`${str} to return ${result}`, () => {
            expect(fn(str)).toBe(result);
        });
    }
}