const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});


const helloWorld = function() {
    return ''
  }
  module.exports = helloWorld


  const helloWorld = function() {
    return 'Hello, World!'
  }
  module.exports = helloWorld