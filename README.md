<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>char-to-string</h1>
  <a href="https://npmjs.com/package/char-to-string">
    <img alt="NPM" src="https://img.shields.io/npm/v/char-to-string.svg">
  </a>
  <a href="https://github.com/bconnorwhite/char-to-string">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/char-to-string.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/char-to-string?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/char-to-string.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Convert a character or character code to string.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/char-to-string">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/char-to-string?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add char-to-string
```

```sh
npm install char-to-string
```

```sh
pnpm add char-to-string
```

## API

### Usage
```ts
import charToString from "char-to-string";

charToString("a"); // "a"

charToString(97); // "a"

charToString("abc"); // "a"
```

### Types
```ts
import charToString from "char-to-string";

function charToString(char: string | number): string;
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/char-to-string.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
