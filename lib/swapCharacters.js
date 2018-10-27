const isUpperCase = require('./isUpperCase')

const swapCharacters = (previous, replacement) => {
    if (isUpperCase(previous)) {
        return replacement.toUpperCase()
    }

    return replacement
}

module.exports = swapCharacters
