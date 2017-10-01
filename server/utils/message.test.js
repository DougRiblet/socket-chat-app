var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage('Zardoz', 'Kneel, humons');

    expect(res).toBeA('object');
    expect(res.from).toBe('Zardoz');
    expect(res.text).toBe('Kneel, humons');
    expect(res.createdAt).toBeA('number');

  });
});
