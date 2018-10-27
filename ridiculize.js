const swapCharacters = require('./lib/swapCharacters')
const isVowel        = require('./lib/isVowel')

const ridiculize = phrase => {
    let splitted = phrase.split('')

    for (let position = 0; position < splitted.length; position++) {
        const character = splitted[position]
        const nextCharacter = splitted[position + 1]

        if (character === 'q' && nextCharacter === 'u') {
            position++
            continue
        }

        if (isVowel(character)) splitted[position] = swapCharacters(character, 'i')

        if (character === 'c' && nextCharacter !== 'i' && isVowel(nextCharacter)) {
            splitted[position] = swapCharacters(character, 'q')
            position++
            splitted.splice(position, 0, 'u')
        }
    }

    const ridiculized = splitted.join('')

    return ridiculized
}

module.exports = ridiculize
