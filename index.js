import retextSentenceSpacing from 'retext-sentence-spacing'
import retextQuotes from 'retext-quotes'
import retextDiacritics from 'retext-diacritics'
import retextRedundantAcronyms from 'retext-redundant-acronyms'
import retextRepeatedWords from 'retext-repeated-words'
import retextIndefiniteArticle from 'retext-indefinite-article'
import retextContractions from 'retext-contractions'

exports.plugins = [
  [retextSentenceSpacing, {preferred: 2}],
  [retextQuotes, {preferred: 'smart'}],
  retextDiacritics,
  retextRedundantAcronyms,
  retextRepeatedWords,
  retextIndefiniteArticle,
  retextContractions
]
