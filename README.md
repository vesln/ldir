[![NPM version](https://badge.fury.io/js/ldir.png)](http://badge.fury.io/js/ldir)
[![Build Status](https://secure.travis-ci.org/vesln/ldir.png)](http://travis-ci.org/vesln/ldir)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# ldir

## Synopsis

Require all files in given dir

## Usage

```js
var loaddir = require('ldir');
var models = loaddir('app/models');

console.log(models.user);
console.log(models.subfolder.another.request);
```

### Custom extension

```js
var fixtures = loaddir('test/fixtures', { ext: '.json' });
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
