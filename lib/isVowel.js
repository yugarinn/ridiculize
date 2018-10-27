const vowels = ['a', 'e', 'i', 'o', 'u']

// TODO: recognize diacritical characters
const isVowel = character => {
    if (vowels.includes(character)) return true
    if (vowels.map(vowel => vowel.toUpperCase()).includes(character)) return true

    return false
}

module.exports = isVowel
