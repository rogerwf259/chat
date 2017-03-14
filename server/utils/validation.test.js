const expect = require('expect');

const {isRealString} = require('./validation');

describe('Validation', () => {
  it('Should reject non-string values', () => {
    var test = isRealString(5);
    expect(test).toBe(false);
  });
  it('Should reject string with only spaces', () => {
    var test = isRealString('   ');
    expect(test).toBe(false);
  });
  it('Should allow string with non-space charachters', () => {
    var test = isRealString('      hola atodos     ');
    expect(test).toBe(true);
  });
});
