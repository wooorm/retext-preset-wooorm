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

/** @type {Preset} */
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
