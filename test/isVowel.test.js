const isVowel = require('../lib/isVowel')

test('returns true for lowercase vocals', () => {
    expect(isVowel('a')).toBe(true);
    expect(isVowel('e')).toBe(true);
    expect(isVowel('i')).toBe(true);
    expect(isVowel('o')).toBe(true);
    expect(isVowel('u')).toBe(true);
})

test('recognizes uppercase vocals', () => {
    expect(isVowel('A')).toBe(true);
    expect(isVowel('E')).toBe(true);
    expect(isVowel('I')).toBe(true);
    expect(isVowel('O')).toBe(true);
    expect(isVowel('U')).toBe(true);
})
