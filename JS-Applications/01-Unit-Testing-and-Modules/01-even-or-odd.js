function isOddOrEven(string) {
  if (typeof string !== 'string') {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return 'even';
  }

  return 'odd';
}

const expect = require('chai').expect;

describe('Odd or Even', function () {
  it('should return odd', function () {
    expect(isOddOrEven('aaa')).to.be.equal('odd');
  });

  it('should return even', function () {
    expect(isOddOrEven('tttt')).to.be.equal('even');
  });

  it('should return undefined for non-string', function () {
    expect(isOddOrEven(5)).to.be.equal(undefined);
    expect(isOddOrEven([])).to.be.equal(undefined);
    expect(isOddOrEven({})).to.be.equal(undefined);
  });
});
