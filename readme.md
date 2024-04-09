# retext-preset-wooorm

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

My personal prose style.

## Contents

* [What is this?](#what-is-this)
* [When should I use this?](#when-should-i-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`unified().use(retextPresetWooorm)`](#unifieduseretextpresetwooorm)
* [Types](#types)
* [Compatibility](#compatibility)
* [Related](#related)
* [Contribute](#contribute)
* [Security](#security)
* [License](#license)

## What is this?

This is a preset for [retext][] to check some prose.
It’s used on all the readmes I work on.

## When should I use this?

Feel free to use this.
But you can also create your own personal style preset.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install retext-preset-wooorm
```

In Deno with [`esm.sh`][esmsh]:

```js
import retextPresetWooorm from 'https://esm.sh/retext-preset-wooorm@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import retextPresetWooorm from 'https://esm.sh/retext-preset-wooorm@5?bundle'
</script>
```

## Use

```js
import {retext} from 'retext'
import retextPresetWooorm from 'retext-preset-wooorm'
import reporter from 'vfile-reporter'

const file = await retext()
  .use(retextPresetWooorm)
  .process('This and and that.')

console.error(reporter(file))
```

Yields:

```txt
1:6-1:13 warning Unexpected repeated `and`, remove one occurrence and retext-repeated-words

⚠ 1 warning
```

## API

This package exports no identifiers.
The default export is [`retextPresetWooorm`][api-retext-preset-wooorm].

### `unified().use(retextPresetWooorm)`

Preset to support my personal prose style ([`Preset`][unified-preset]).

###### Notes

* checks for a [line ending][retext-sentence-spacing] between sentences
* checks [“indefinite articles”][retext-indefinite-article]: “a” or “an”
* checks [quotes and apostrophes][retext-quotes] (`""` > `“”`)
* checks accidental [repeated words][retext-repeated-words]
* checks [diacritics][retext-diacritics]
* checks [redundant acronyms][retext-redundant-acronyms]
* checks incorrectly placed apostrophes in
  [contractions][retext-contractions]

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by me are compatible with maintained versions of Node.js.

When I cut a new major release, I drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `retext-preset-wooorm@^5`,
compatible with Node.js 16.

## Related

* [`remark-preset-wooorm`](https://github.com/wooorm/remark-preset-wooorm)
  — personal markdown style

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/retext-preset-wooorm/workflows/main/badge.svg

[build]: https://github.com/wooorm/retext-preset-wooorm/actions

[downloads-badge]: https://img.shields.io/npm/dm/retext-preset-wooorm.svg

[downloads]: https://www.npmjs.com/package/retext-preset-wooorm

[size-badge]: https://img.shields.io/bundlejs/size/retext-preset-wooorm

[size]: https://bundlejs.com/?q=retext-preset-wooorm

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[retext-contractions]: https://github.com/retextjs/retext-contractions

[retext-diacritics]: https://github.com/retextjs/retext-diacritics

[retext-indefinite-article]: https://github.com/retextjs/retext-indefinite-article

[retext-quotes]: https://github.com/retextjs/retext-quotes

[retext-redundant-acronyms]: https://github.com/retextjs/retext-redundant-acronyms

[retext-repeated-words]: https://github.com/retextjs/retext-repeated-words

[retext-sentence-spacing]: https://github.com/retextjs/retext-sentence-spacing

[unified-preset]: https://github.com/unifiedjs/unified#preset

[api-retext-preset-wooorm]: #unifieduseretextpresetwooorm
