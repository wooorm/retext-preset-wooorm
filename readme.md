# retext-preset-wooorm

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

My personal prose style.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`retextPresetWooorm`](#retextpresetwooorm)
*   [Checks](#checks)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This is a preset for [retext][] to check some prose.
It’s used on all the readmes I work on.

## When should I use this?

Feel free to use this.
But you can also create your own personal style preset.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install retext-preset-wooorm
```

In Deno with [`esm.sh`][esmsh]:

```js
import retextPresetWooorm from 'https://esm.sh/retext-preset-wooorm@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import retextPresetWooorm from 'https://esm.sh/retext-preset-wooorm@4?bundle'
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
  1:6-1:13  warning  Expected `and` once, not twice  and  retext-repeated-words

⚠ 1 warning
```

## API

This package exports no identifiers.
The default export is `retextPresetWooorm`.

### `retextPresetWooorm`

Preset to support my personal prose style.

## Checks

###### Natural Language

*   a [line ending][sentence] between sentences
*   checks [“indefinite articles”][articles]: “a” or “an”
*   checks [quotes and apostrophes][quotes] (`""` > `“”`)
*   checks accidental [repeated words][repeated]
*   checks [diacritics][]
*   checks [redundant acronyms][ras]
*   checks incorrectly placed apostrophes in [contractions][]

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`remark-preset-wooorm`](https://github.com/wooorm/remark-preset-wooorm)
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

[size-badge]: https://img.shields.io/bundlephobia/minzip/retext-preset-wooorm.svg

[size]: https://bundlephobia.com/result?p=retext-preset-wooorm

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[retext]: https://github.com/retextjs/retext

[sentence]: https://github.com/retextjs/retext-sentence-spacing

[articles]: https://github.com/retextjs/retext-indefinite-article

[quotes]: https://github.com/retextjs/retext-quotes

[repeated]: https://github.com/retextjs/retext-repeated-words

[contractions]: https://github.com/retextjs/retext-contractions

[diacritics]: https://github.com/retextjs/retext-diacritics

[ras]: https://github.com/retextjs/retext-redundant-acronyms
