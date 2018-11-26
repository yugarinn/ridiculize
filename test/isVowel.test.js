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

test('recognizes basic accents', () => {
    expect(isVowel('á')).toBe(true);
    expect(isVowel('é')).toBe(true);
    expect(isVowel('í')).toBe(true);
    expect(isVowel('ó')).toBe(true);
    expect(isVowel('ú')).toBe(true);
})
