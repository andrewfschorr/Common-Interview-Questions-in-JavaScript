import * as funcs from './1.3';

test(`undefined to return undefined`, () => {
    expect(funcs.urlIfySmart(undefined)).toBe(undefined);
});
test(`undefined to return undefined`, () => {
    expect(funcs.urlIfy(undefined)).toBe(undefined);
});

test(`null to return null`, () => {
    expect(funcs.urlIfySmart(null)).toBe(null);
});
test(`null to return null`, () => {
    expect(funcs.urlIfy(null)).toBe(null);
});

const testCasesDumb = {
    'mr%20john%20smith' : ['mr john smith    ', 13],
    'a%20b' : ['a b  ', 3],
};

for (let answer in testCasesDumb) {
    const params = testCasesDumb[answer];
    test(`${params[0]} and ${params[1]} to be ${answer}`, () => {
        expect(funcs.urlIfy(params[0], params[1])).toBe(answer);
    });
}

const smartCasesDumb = [
    '    hello      good       woooorrrlllld',
    'hi bye    ',
    'ok ok ok',
]

smartCasesDumb.forEach((url) => {
    const answer = url.trim().replace(/\s+/g, '%20');
    test(`${url} to evaluate to ${answer}`, () => {
        expect(funcs.urlIfySmart(url)).toBe(answer);
    });
})
