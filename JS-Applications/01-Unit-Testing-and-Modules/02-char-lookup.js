function lookupChar(string, index) {
  if (typeof string !== 'string' || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return 'Incorrect index';
  }

  return string.charAt(index);
}

const expect = require('chai').expect;

describe('Main', function () {
  const testString = 'seagull';

  describe('Invalid parameters', function () {
    it('should return undefined for non-string first parameter', function () {
      expect(lookupChar(null, 0)).to.be.equal(undefined);
    });

    it('should return undefined for non-number second parameter', function () {
      expect(lookupChar(testString, '3')).to.be.equal(undefined);
    });

    it('should return undefined for non-integer', function () {
      expect(lookupChar(testString, 3.14)).to.be.equal(undefined);
    });
  });

  describe('Out of range', function () {
    it('should return undefined below 0', function () {
      expect(lookupChar(testString, -1)).to.be.equal('Incorrect index');
    });

    it('should return undefined below 0', function () {
      expect(lookupChar(testString, 7)).to.be.equal('Incorrect index');
    });
  });

  describe('Happy path', function () {
    it('should return s', function () {
      expect(lookupChar(testString, 0)).to.be.equal('s');
    });

    it('should return a', function () {
      expect(lookupChar(testString, 2)).to.be.equal('a');
    });

    it('should return a', function () {
      expect(lookupChar('testString', 4)).to.be.equal('S');
    });
  });
});
