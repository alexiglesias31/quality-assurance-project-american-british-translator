const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const britishToAmericanSpelling = Object.entries(americanToBritishSpelling).reduce((acc,[key, value]) => {
    acc[value] = key
    return acc
}, {})

const american = {...americanOnly, ...americanToBritishSpelling}
const british = {...britishOnly, ...britishToAmericanSpelling}

console.log(american['caramelise'], american['caramelize'], british['caramelise'], british['caramelize'])

class Translator {
    toBritish(input, highlight = true) {
        let translatedString = input;
        translatedString = highlight ? translatedString.replace(/(\d+)(:)(\d+)/g, '<span class="highlight">$1.$3</span>') : translatedString.replace(/(\d+)(:)(\d+)/g, '$1.$3')
        Object.values(americanToBritishTitles).sort((a,b) => b.length - a.length).forEach(word => {
            let regex = new RegExp(`\(${word}\)\(\.\)\\\s`, 'gi')
            translatedString = highlight ? translatedString.replace(regex, `<span class="highlight">$1</span> `) : translatedString.replace(regex, `$1 `)
        })
        Object.keys(american).sort((a,b) => b.length - a.length).forEach(word => {
            let regex = new RegExp(`\(${word}\)\(\[\\\s\\\.\?\!\]\)`, 'gi')
            translatedString = highlight ? translatedString.replace(regex, `<span class="highlight">${american[word.toLowerCase()]}</span>$2`) : translatedString.replace(regex, `${american[word.toLowerCase()]}$2`)
        })
        return translatedString
    }
    toAmerican(input, highlight = true) {
        let translatedString = input;

        translatedString = highlight ? translatedString.replace(/(\d+)(.)(\d+)/g, '<span class="highlight">$1:$3</span>') : translatedString.replace(/(\d+)(.)(\d+)/g, '$1:$3')
        Object.values(americanToBritishTitles).sort((a,b) => b.length - a.length).forEach(word => {
            let regex = new RegExp(`\(${word}\)\\\s`, 'gi')
            translatedString = highlight ? translatedString.replace(regex, `<span class="highlight">$1.</span> `) : translatedString.replace(regex, `$1. `)
        })
        Object.keys(british).sort((a,b) => b.length - a.length).forEach(word => {
            let regex = new RegExp(`\(${word}\)\(\[\\\s\\\.\?\!\]\)`, 'gi')
            translatedString = highlight ? translatedString.replace(regex, `<span class="highlight">${british[word.toLowerCase()]}</span>$2`) : translatedString.replace(regex, `${british[word.toLowerCase()]}$2`)
        })
        return translatedString
    }
    translate(input, locale, highlight = true) {
        let translatedString = '';

        if (locale === 'us') {
            translatedString = this.toBritish(input, highlight)
        } else if (locale === 'uk') {
            translatedString = this.toAmerican(input, highlight)
        }

        return translatedString
    }
}

module.exports = Translator;