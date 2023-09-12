/**
 * @typedef {import('unified').Preset} Preset
 */

import retextContractions from 'retext-contractions'
import retextDiacritics from 'retext-diacritics'
import retextIndefiniteArticle from 'retext-indefinite-article'
import retextQuotes from 'retext-quotes'
import retextRedundantAcronyms from 'retext-redundant-acronyms'
import retextRepeatedWords from 'retext-repeated-words'
import retextSentenceSpacing from 'retext-sentence-spacing'

/**
 * Preset to support my personal prose style.
 *
 * ###### Notes
 *
 * *   checks for a line ending between sentences
 * *   checks “indefinite articles”: “a” or “an”
 * *   checks quotes and apostrophes (`""` > `“”`)
 * *   checks accidental repeated words
 * *   checks diacritics
 * *   checks redundant acronyms
 * *   checks incorrectly placed apostrophes in contractions
 *
 * @type {Preset}
 */
const retextPresetWooorm = {
  plugins: [
    retextContractions,
    retextDiacritics,
    retextIndefiniteArticle,
    [retextQuotes, {preferred: 'smart'}],
    retextRedundantAcronyms,
    retextRepeatedWords,
    [retextSentenceSpacing, {preferred: 'newline'}]
  ]
}

export default retextPresetWooorm
