# retext-preset-wooorm [![Build Status][travis-badge]][travis]

My personal prose style.

[Learn more about presets in unified’s docs][docs].

## Installation

[npm][]:

```sh
npm install retext-preset-wooorm --save
```

## Checks

###### Natural Language

*   Two [spaces][] between sentences
*   Checks [“indefinite articles”][articles]: “a” or “an”
*   Checks [quotes and apostrophes][quotes] (`""` > `“”`)
*   Checks accidental [repeated words][repeated]
*   Checks [diacritics][]
*   Checks [redundant acronyms][ras]
*   Checks incorrectly placed apostrophes in [contractions][]

## Related

*   [`remark-preset-wooorm`](https://github.com/wooorm/remark-preset-wooorm)
    — Personal markdown style

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/remark-preset-wooorm.svg

[travis]: https://travis-ci.org/wooorm/remark-preset-wooorm

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[spaces]: https://github.com/retextjs/retext-sentence-spacing

[articles]: https://github.com/retextjs/retext-indefinite-article

[quotes]: https://github.com/retextjs/retext-quotes

[repeated]: https://github.com/retextjs/retext-repeated-words

[contractions]: https://github.com/retextjs/retext-contractions

[diacritics]: https://github.com/retextjs/retext-diacritics

[ras]: https://github.com/retextjs/retext-redundant-acronyms

[docs]: https://github.com/unifiedjs/unified#preset
