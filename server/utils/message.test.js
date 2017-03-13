const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('message', () => {
  it('should generate the correct message object', () => {
    const obj = {
      from: 'Daniel',
      text: 'Hi how are you'
    };
    var test = generateMessage(obj.from, obj.text);
    expect(test.from).toBe(obj.from);
    expect(test.text).toBe(obj.text);
    expect(test.createdAt).toExist();
  });
});

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    var lat = 15;
    var lon = 19;
    var url = 'https://www.google.com/maps?q=15,19'

    var test = generateLocationMessage('Daniel', lat, lon);
    expect(test.createdAt).toBeA('number');
    expect(test).toInclude({
      from: 'Daniel',
      url
    });

  });
});
