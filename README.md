# Console Log Plus

> 💬🌈😍 Bring meaningful prefixes and colors to your console log

[![Node Version](https://img.shields.io/badge/node-v12.4.0-brightgreen.svg)](https://github.com/nodejs/node/releases/tag/v12.4.0)
[![NPM Version](https://img.shields.io/badge/npm-v6.9.0-brightgreen.svg)](https://github.com/npm/cli/releases/tag/v6.9.0)
[![MIT Licence](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dreamyguy/console-log-plus/blob/master/LICENSE)

`console.log` is a very useful tool in web development. It lets us know what we do have and gives us hints of what we need. But important information can get overseen in the midst of all that noise.

Meaninful prefixes and color-coded messages can come a long way in helping us scan through our log.

**Console Log Plus** - _or `clp` as the function is called_ - gives us both. It also gives us the convenience of 6 optional types, which we _can_ use if we want to:

- `ok` - white on purple
- `info` - black on light blue
- `error` - white on red
- `warning` - white on orange
- `attention` - black on yellow
- `success` - black on green
- `default` - black on white

# Usage

As with any node module, first you'll have to import it with `require`:

```javascript
var clp = require('console-log-plus');
```

...or through `import`:

```javascript
import clp from 'console-log-plus';
```

**Custom prefixes, with types**

![Variation-1](https://raw.githubusercontent.com/dreamyguy/console-log-plus/master/docs/clp_custom-prefixes-with-types.png "Custom prefixes, with types")

```javascript
clp({
  type: 'ok',
  prefix: 'Okay',
  message: 'you bet'
});
clp({
  type: 'error',
  prefix: 'Ouch',
  message: 'you bet'
});
clp({
  type: 'warning',
  prefix: 'I told you',
  message: 'you bet'
});
clp({
  type: 'attention',
  prefix: 'Watch it!',
  message: 'you bet'
});
clp({
  type: 'success',
  prefix: 'Awesome!',
  message: 'you bet'
});
clp({
  type: 'info',
  prefix: 'FYI',
  message: 'you bet'
});
clp({
  type: 'default',
  prefix: 'No fun',
  message: 'you bet'
});
```

**No prefixes, with types**

![Variation-2](https://raw.githubusercontent.com/dreamyguy/console-log-plus/master/docs/clp_no-prefixes-with-types.png "No prefixes, with types")

```javascript
clp({
  type: 'ok',
  message: 'you bet'
});
clp({
  type: 'error',
  message: 'you bet'
});
clp({
  type: 'warning',
  message: 'you bet'
});
clp({
  type: 'attention',
  message: 'you bet'
});
clp({
  type: 'success',
  message: 'you bet'
});
clp({
  type: 'info',
  message: 'you bet'
});
clp({
  type: 'default',
  message: 'you bet'
});
```

**With prefixes, no types, custom colors**

![Variation-3](https://raw.githubusercontent.com/dreamyguy/console-log-plus/master/docs/clp_with-prefixes-no-types-custom-colors.png "With prefixes, no types, custom colors")

```javascript
clp({
  prefix: 'Okay',
  color: 'yellow',
  background: '#f012be',
  message: 'you bet'
});
clp({
  prefix: 'Ouch',
  color: 'yellow',
  background: '#b10dc9',
  message: 'you bet'
});
clp({
  prefix: 'I told you',
  color: 'yellow',
  background: '#85144b',
  message: 'you bet'
});
clp({
  prefix: 'Watch it!',
  color: 'yellow',
  background: '#89326f',
  message: 'you bet'
});
clp({
  prefix: 'Awesome!',
  color: 'yellow',
  background: 'green',
  message: 'you bet'
});
clp({
  prefix: 'FYI',
  color: 'yellow',
  background: '#ff4136',
  message: 'you bet'
});
clp({
  prefix: 'No fun',
  color: 'yellow',
  background: '#4d1e40',
  message: 'you bet'
});
```

**No prefixes, no types, custom colors**

![Variation-4](https://raw.githubusercontent.com/dreamyguy/console-log-plus/master/docs/clp_no-prefixes-no-types-custom-colors.png "No prefixes, no types, custom colors")

```javascript
clp({
  color: 'yellow',
  background: '#ff4136',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: '#f012be',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: '#b10dc9',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: '#85144b',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: 'green',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: '#89326f',
  message: 'you bet'
});
clp({
  color: 'yellow',
  background: '#4d1e40',
  message: 'you bet'
});
```

# Development

## Getting started

Clone this repo locally. You'll need to have [NodeJS][1] installed. Install all dependencies by running:

    npm i

## Run it locally

To start the app locally, run:

    npm run dev

This command fires up the application on port `9887`, making it visible on http://localhost:9887.

Every time you make changes to [src/index.js][3], your page will refresh and reflect the changes.

_This is only meant as a way to debug the function in the browser, and is only available in `development` mode_.

## Building for production

When you're done with your changes, run:

     npm run build

This command compiles the production-optimised `javascript` to `dist/index.js`, a file compiled out of [src/index.js][3].

## Good to know

### License

[MIT](LICENSE)

### About

**Console Log Plus** was put together by [Wallace Sidhrée][1]. 👨‍💻🇳🇴

  [1]: http://sidhree.com/
  [2]: https://nodejs.org/
  [3]: https://github.com/dreamyguy/console-log-plus/blob/master/src/index.js
