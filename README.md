# prefix-classname

[![build status](https://img.shields.io/travis/imcuttle/prefix-classname/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/prefix-classname)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/prefix-classname.svg?style=flat-square)](https://codecov.io/github/imcuttle/prefix-classname?branch=master)
[![NPM version](https://img.shields.io/npm/v/prefix-classname.svg?style=flat-square)](https://www.npmjs.com/package/prefix-classname)
[![NPM Downloads](https://img.shields.io/npm/dm/prefix-classname.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/prefix-classname)

The useful utility for making scoped classname.

## Usage

```bash
npm i prefix-classname
```

```javascript
const prefix = require('prefix-classname')

prefix('ex-')('hiii', { 'o': false, 'pp': true })
// ex-hiii ex-pp
```
