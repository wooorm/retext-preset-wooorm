# retext-preset-wooorm

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

My personal prose style.

[Learn more about presets in unified’s docs][docs].

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install retext-preset-wooorm
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

[build-badge]: https://github.com/wooorm/retext-preset-wooorm/workflows/main/badge.svg

[build]: https://github.com/wooorm/retext-preset-wooorm/actions

[downloads-badge]: https://img.shields.io/npm/dm/retext-preset-wooorm.svg

[downloads]: https://www.npmjs.com/package/retext-preset-wooorm

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-preset-wooorm.svg

[size]: https://bundlephobia.com/result?p=retext-preset-wooorm

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spaces]: https://github.com/retextjs/retext-sentence-spacing

[articles]: https://github.com/retextjs/retext-indefinite-article

[quotes]: https://github.com/retextjs/retext-quotes

[repeated]: https://github.com/retextjs/retext-repeated-words

[contractions]: https://github.com/retextjs/retext-contractions

[diacritics]: https://github.com/retextjs/retext-diacritics

[ras]: https://github.com/retextjs/retext-redundant-acronyms

[docs]: https://github.com/unifiedjs/unified#preset
