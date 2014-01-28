[![NPM version](https://badge.fury.io/js/ldir.png)](http://badge.fury.io/js/ldir)
[![Build Status](https://secure.travis-ci.org/vesln/ldir.png)](http://travis-ci.org/vesln/ldir)

# ldir

## Synopsis

Require all JS files in given dir

## Usage

```js
var loaddir = require('ldir');
var models = loaddir('app/models');

console.log(models.user);
console.log(models.subfolder.another.request);
```

## Installation

```bash
$ npm install ldir
```

## Tests

```bash
$ make
```

## License

MIT License (see LICENSE)
