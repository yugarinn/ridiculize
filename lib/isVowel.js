const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú']

// TODO: recognize diacritical characters
const isVowel = character => {
    if (vowels.includes(character)) return true
    if (vowels.map(vowel => vowel.toUpperCase()).includes(character)) return true

    return false
}

module.exports = isVowel
