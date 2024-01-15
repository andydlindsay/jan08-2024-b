const sayHello = require('./say-hello');
// console.log(sayHello);

const assert = require('assert');

const actual = sayHello('alice');
const expected = 'hello there alice'; 

assert.strictEqual(actual, expected);
