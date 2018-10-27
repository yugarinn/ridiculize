const rididulize = require('../ridiculize')

test('swaps vowels for i characters', () => {
    expect(rididulize('What about loyalty?'))
        .toBe('Whit ibiit liyilty?')
})

test('swaps c before vowels for qu characters', () => {
    expect(rididulize('eso me ha ofendido cantidad'))
        .toBe('isi mi hi ifindidi quintidid')
})

test('maintains qu characters before vowels', () => {
    expect(rididulize('eso que has dicho me ha ofendido cantidad'))
        .toBe('isi qui his dichi mi hi ifindidi quintidid')
})

test('maintains the characters case', () => {
    expect(rididulize('Imbecil, me has hecho MUCHO DAÑO'))
        .toBe('Imbicil, mi his hichi MICHI DIÑI')
})
