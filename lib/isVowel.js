const isVowel = character => {
    const vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'u', 'ú']
    return vowels.includes(character.toLowerCase())
}

module.exports = isVowel
