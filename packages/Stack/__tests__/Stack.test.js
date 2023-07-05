'use strict';

const stack = require('..');
const assert = require('assert').strict;

assert.strictEqual(stack(), 'Hello from stack');
console.info('stack tests passed');
