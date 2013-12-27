[![NPM version](https://badge.fury.io/js/jstore.png)](http://badge.fury.io/js/jstore)
[![Build Status](https://secure.travis-ci.org/vesln/jstore.png)](http://travis-ci.org/vesln/jstore)

# jstore

## Synopsis

Minimalistic JSON-based persistence layer

## API

### write

```js
var data = { foo: 'bar' };
var path = '/tmp/test.json';

jstore.write(path, data, function(err) {});
```

### read

```js
var glob = '/tmp/*.json';
var path = '/tmp/1.json';

jstore.read(glob, function(err, records) {});
jstore.read(path, function(err, records) {});
```

## Installation

npm:

```bash
npm install jstore
```

## Tests

```bash
$ npm test
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
