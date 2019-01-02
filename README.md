# random-seed-generator
[![NPM version](https://img.shields.io/npm/v/random-seed-generator.svg?style=flat-square)](https://npmjs.org/package/random-seed-generator)
[![Build Status](https://img.shields.io/travis/ecerroni/random-seed-generator/master.svg?style=flat-square)](https://travis-ci.org/ecerroni/random-seed-generator) [![Coverage Status](https://img.shields.io/codecov/c/github/ecerroni/random-seed-generator/master.svg?style=flat-square)](https://codecov.io/gh/ecerroni/random-seed-generator/branch/master)
![Dependencies](https://img.shields.io/librariesio/dependents/npm/random-seed-generator.svg)
![minified + gzip](https://img.shields.io/bundlephobia/minzip/random-seed-generator.svg)



```
  Random = require('random-seed-generator');
```

OR

```
  import Random from 'random-seed-generator';
```

The random package provides several functions for generating random numbers, general strings and secrets. It uses a cryptographically strong pseudorandom number generator when possible, but falls back to a weaker random number generator when cryptographically strong randomness is not available (on older browsers or on servers that don't have enough entropy to seed the cryptographically strong generator).

* `Random.number(options)` | ex. `Random.number({ length: 11 })`

```
// defaults
length: 8 // maximum length is 19
```

Returns a unique number, such as 87845349092, that is likely to be pretty unique.


* `Random.string(options)` | ex. `Random.string({ length: 19, pool: 'abcdefghilmnopqrstuvxyz' })`

```
// defaults
length: 17
pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]'
```
Returns a unique identifier, such as "Wb#Jo^YT4poj[G9AJ", that is likely to be unique in the whole world.

* `Random.secret(options)` | ex. `Random.secret({ length: 47, pool: 'abcdefghilmnopqrstuvxyz' })`

Returns a random string of printable characters with 6 bits of entropy per character such as "uko0--9lslEQkUA5_r1cWHqPv7JLm2Lj8Bikrwk1wWr". The optional argument object can specifies the length of the secret string and defaults to 43 characters, or 256 bits of entropy, and the pool of base64 chars that defaults to 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'. Use Random.secret for security-critical secrets that are intended for machine, rather than human, consumption.

* `Random.createWithSeeds('customSeed')`
Generates predictable outputs that can lead to predictability of the numbers, strings or secrets generated it using a seed (such as a random string, a process ID, the system time, etc.).
Example:
```
const firstValue = Random.createWithSeeds('customSeed').string({ length: 13, pool: 'dfdfdfasdfaffadfa11hjkhjksefdhjlf8907234768q3e478efryui^&^*&^&*&*' })

const secondValue = Random.createWithSeeds('customSeed').string({ length: 13, pool: 'dfdfdfasdfaffadfa11hjkhjksefdhjlf8907234768q3e478efryui^&^*&^&*&*' })

console.log(firstValue, secondValue, firstValue === secondValue) // output: 8^ffk8f9af1&e 8^ffk8f9af1&e true
```

* `Random.fraction()`
Returns a number between 0 and 1, like Math.random.

* `Random.choice(arrayOrString)`
Returns a random element of the given array or string.

* `Random.hexString(n)`
Returns a random string of n hexadecimal digits.

### Thanks to:
This repo is a fork of https://github.com/dVelopment/meteor-random, a Meteor's Random Package, Stripped for Straight Node. It is mostly based on the original code with few modifications and additions. For more information see [Meteor's Random Docs](http://docs.meteor.com/#/full/random)
