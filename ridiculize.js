const swapCharacters = require('./lib/swapCharacters')
const isVowel        = require('./lib/isVowel')

const ridiculize = phrase => {
    return phrase.split('').map((character, index, phrase) => {
        // TODO: get rid of this
        const nextCharacter = phrase[index + 1]
        const previousCharacter = phrase[index - 1]

        if (character === 'u' && previousCharacter === 'q') {
            return
        }

        if (isVowel(character)) {
            return swapCharacters(character, 'i')
        }

        if (character === 'q' && nextCharacter === 'u') {
            return swapCharacters(character, 'qu')
        }

        if (character === 'c' && ! ['i', 'e'].includes(nextCharacter) && isVowel(nextCharacter)) {
            return swapCharacters(character, 'qu')
        }

        return character
    }).join('')
}

module.exports = ridiculize
