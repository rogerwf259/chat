const expect = require('expect');
var {generateMessage} = require('./message');

describe('message', () => {
  it('should generate the correct message object', () => {
    const obj = {
      from: 'Daniel',
      text: 'Hi how are you'
    };
    var test = generateMessage(obj.from, obj.text);
    expect(test.from).toBe('Roger');
    expect(test.text).toBe(obj.text);
    expect(test.createdAt).toExist();
  });
});
