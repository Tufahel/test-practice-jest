const capitalizedString = require('./task4.js');

describe('capitalizedString', function () {
  it('capitalized first letter', function () {
    const string = 'tufahel';
    const capitalizedStr = capitalizedString(string);

    expect(capitalizedStr).toEqual('Tufahel');
  });

})