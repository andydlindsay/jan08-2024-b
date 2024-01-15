const sayHello = require('../say-hello');
const assert = require('assert');

describe('tests for the sayHello function', function() {

  it('returns "hello there alice" when passed the string "alice"', function() {
    const actual = sayHello('alice');
    const expected = 'hello there alice'; 

    assert.strictEqual(typeof actual, 'string');
    assert.strictEqual(actual, expected);
  });

});
