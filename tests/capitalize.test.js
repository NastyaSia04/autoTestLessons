import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

assert.deepStrictEqual(capitalize(''), '');
assert.deepStrictEqual(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');