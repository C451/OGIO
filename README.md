
<div align="center">
  <img src="/assets/README-0503b97c.png" alt="OG I/O logo">

  ![npm](https://img.shields.io/npm/v/ogio.svg?color=brightgreen&label=version) ![license](https://img.shields.io/badge/license-MIT-blue.svg)
</div>
<br/>
<div align="center">
<img src="https://github.com/C451/OGIO/raw/master/assets/README-13f280ca.gif" alt="wut?"><img src="https://github.com/C451/OGIO/raw/master/assets/README-13f280ca.gif">
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
// => This is a text
```

```js
await "@file.txt".g()
// => This is the same text, but async
```

```js
"file.json".g()
// => {txt: "Parsed json"}
```

```js
await "https://example.com".g()
// => <html> ... </html>
```

```js
await "https://example.com/file.json".g()
// => {txt: "Parsed json from example.com"}
```

### Save!

```js
"file.txt".s("This will be a text")
// => This will be a text
```

```js
await "@file.txt".s("The same text, but async")
// => The same text, but async
```

```js
"file.json".s({txt:"json smth"})
// => {
//        "txt": "json smth"
//    }
```

**...More stuff is coming**
