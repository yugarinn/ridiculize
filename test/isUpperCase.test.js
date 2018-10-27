const isUpperCase = require('../lib/isUpperCase')

test('returns true for uppercase characters', () => {
    expect(isUpperCase('A')).toBe(true)
    expect(isUpperCase('B')).toBe(true)
})

test('returns false for lowercase characters', () => {
    expect(isUpperCase('a')).toBe(false)
    expect(isUpperCase('b')).toBe(false)
})
