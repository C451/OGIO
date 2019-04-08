
<div align="center">
  <img src="/assets/README-378c6778.png" alt="OG I/O logo">

  ![npm](https://img.shields.io/npm/v/ogio.svg?color=brightgreen&label=version) ![license](https://img.shields.io/badge/license-MIT-blue.svg)
</div>
<br/>

<div align="center">
<img src="/assets/README-13f280ca.gif" alt="wut?"><img src="/assets/README-13f280ca.gif">
</div>
<br/>

<div align="right">
<strong>"The most dangerous js library I know"</strong><br/>
– Data Science OG
</div>

## OG I/O... what it's all 'bout?

### Install

```bash
npm i ogio
```
```js
require("ogio")
```


### Fetch!

```js
"file.txt".g()
// => This is a text!
```

```js
await "@file.txt".g()
// => This is the same text, but async!
```

```js
"file.json".g()
// => {a: 1, b: 2, c: 3, txt: "Parsed json"}
```

```js
await "https://example.com".g()
// => <html> ... </html>
```

```js
await "https://example.com/file.json".g()
// => {txt: "Parsed json from example.com"}
```

**...More stuff is coming**
