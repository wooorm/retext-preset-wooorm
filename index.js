'use strict';

exports.plugins = [
  [require('retext-sentence-spacing'), {preferred: 2}],
  [require('retext-quotes'), {preferred: 'smart'}],
  require('retext-diacritics'),
  require('retext-redundant-acronyms'),
  require('retext-repeated-words'),
  require('retext-indefinite-article'),
  require('retext-contractions')
];
