const ridiculize = require('../ridiculize')

test('Swaps vowels for i characters', () => {
    expect(ridiculize('What about loyalty?'))
        .toBe('Whit ibiit liyilty?')
})

test('Swaps c before vowels for qu characters', () => {
    expect(ridiculize('eso me ha ofendido cantidad'))
        .toBe('isi mi hi ifindidi quintidid')
})

test('Does not swap c for qu characters for i and e vowels', () => {
    expect(ridiculize('Mi celebración fue la de ayer?'))
        .toBe('Mi cilibriciin fii li di iyir?')
})

test('Maintains qu characters before vowels', () => {
    expect(ridiculize('eso que has dicho me ha ofendido cantidad'))
        .toBe('isi qui his dichi mi hi ifindidi quintidid')
})

test('Maintains the characters case', () => {
    expect(ridiculize('Imbecil, me has hecho MUCHO DAÑO'))
        .toBe('Imbicil, mi his hichi MICHI DIÑI')
})
